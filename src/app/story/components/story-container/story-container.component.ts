import { Component, EventEmitter, Input, Output, ViewContainerRef } from "@angular/core";
import { outputToObservable } from "@angular/core/rxjs-interop";
import { BasicStoryState, StoryController, StoryDefinition } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { take } from "rxjs";

export class ChapterComponent {
  data!: any;
  end = new EventEmitter<void>();
}

export class Chapter<
  ChapterId extends string,
  Component extends new (...args: any[]) => ChapterComponent,
  StoryState extends {} = {},
  Metadata = never,
> {
  public readonly component: Component;
  public readonly data: InstanceType<Component>["data"];
  public readonly metadata: Metadata;
  public readonly nextChapter:
    | ChapterId
    | ((state: StoryState) => ChapterId)
    | ((state: StoryState) => Promise<ChapterId>)
    | null;

  constructor(
    public readonly id: ChapterId,
    definition: {
      component: Component;
      data: InstanceType<Component>["data"];
      nextChapter: ChapterId | ((state: StoryState) => ChapterId) | ((state: StoryState) => Promise<ChapterId>) | null;
    } & ([Metadata] extends [never] ? {} : { metadata: Metadata }),
  ) {
    this.component = definition.component;
    this.data = definition.data;
    this.metadata = (<any>definition).metadata;
    this.nextChapter = definition.nextChapter;
  }
}

export type Story<
  ChapterId extends string,
  StoryState extends BasicStoryState<ChapterId>,
  ChapterMetadata = never,
> = StoryDefinition<ChapterId, StoryState, Chapter<ChapterId, any, StoryState, ChapterMetadata>>;

@UntilDestroy()
@Component({
  selector: "app-story-container",
  templateUrl: "./story-container.component.html",
  styleUrl: "./story-container.component.scss",
})
export class StoryContainerComponent {
  @Input() story!: Story<any, BasicStoryState<any>, any>;
  @Input() initialChapter!: string;

  @Output() end = new EventEmitter<void>();

  currentChapter: Chapter<string, typeof ChapterComponent> | null = null;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly storyController: StoryController<
      string,
      BasicStoryState,
      Chapter<string, typeof ChapterComponent>
    >,
  ) {
    this.storyController.currentChapter.pipe(untilDestroyed(this)).subscribe((currentChapter) => {
      if (currentChapter) this.loadChapter(currentChapter);
    });
  }

  loadChapter(chapter: Chapter<string, typeof ChapterComponent>) {
    this.viewContainerRef.clear();

    const component = this.viewContainerRef.createComponent(chapter.component);

    component.instance.data = chapter.data;

    outputToObservable(component.instance.end)
      .pipe(take(1))
      .subscribe(() => {
        this.storyController.nextChapter();
      });
  }
}
