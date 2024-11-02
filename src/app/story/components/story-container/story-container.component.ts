import { Component, EventEmitter, Input, Output, OutputEmitterRef, ViewContainerRef } from "@angular/core";
import { outputToObservable } from "@angular/core/rxjs-interop";
import {
  StoryController,
  ChapterDefinition as StoryControllerChapterDefinition,
  StoryDefinition as StoryControllerStoryDefinition,
} from "@audiowalk/sdk";
import { untilDestroyed } from "@ngneat/until-destroy";

import { first } from "rxjs";

export interface ChapterComponent<D> {
  data: D;
  end: OutputEmitterRef<void> | EventEmitter<void>;
}

export type ChapterComponentData<D extends {}> = D & {
  component: new () => ChapterComponent<D>;
};

export type ChapterDefinition<ChapterId extends string, Data extends {}> = StoryControllerChapterDefinition<
  ChapterId,
  ChapterComponentData<Data>
>;
export type StoryDefinition<ChapterId extends string, Data extends {}> = StoryControllerStoryDefinition<
  ChapterId,
  ChapterComponentData<Data>
>;

@Component({
  selector: "app-story-container",
  templateUrl: "./story-container.component.html",
  styleUrl: "./story-container.component.scss",
})
export class StoryContainerComponent<ChapterId extends string, Data extends {}> {
  @Input() chapters!: StoryDefinition<ChapterId, Data>;
  @Input() initialChapter!: string;

  @Output() end = new EventEmitter<void>();

  currentChapter: ChapterDefinition<ChapterId, Data> | null = null;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly storyController: StoryController<ChapterId, ChapterComponentData<Data>>,
  ) {
    this.storyController.currentChapter.pipe(untilDestroyed(this)).subscribe((currentChapter) => {
      if (currentChapter) this.loadChapter(currentChapter);
    });
  }

  loadChapter(chapter: ChapterDefinition<ChapterId, Data>) {
    this.viewContainerRef.clear();

    const component = this.viewContainerRef.createComponent(chapter.data.component);

    component.instance.data = chapter.data;

    outputToObservable(component.instance.end)
      .pipe(first())
      .subscribe(() => {
        this.nextChapter(chapter);
      });
  }

  private async nextChapter(chapter: ChapterDefinition<ChapterId, Data>) {
    if (chapter.nextChapter === null) {
      return this.endStory();
    }

    if (typeof chapter.nextChapter === "string") {
      const nextChapter = this.chapters[chapter.nextChapter];
      return this.loadChapter(nextChapter);
    }

    if (typeof chapter.nextChapter === "function") {
      const storyState = this.storyController.storyState.value;
      const chapterId = await chapter.nextChapter(storyState);

      this.loadChapter(this.chapters[chapterId]);
    }

    throw new Error(`Invalid nextChapter type in chapter ${chapter.id}`);
  }

  private endStory() {
    this.end.emit();
  }
}
