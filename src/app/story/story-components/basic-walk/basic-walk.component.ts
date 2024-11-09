import { Component, EventEmitter, Input, Output } from "@angular/core";
import { StoryController } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map } from "rxjs";
import { ChapterId, StoryState } from "src/app/data/story";
import { TrackId } from "src/app/data/tracks";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@UntilDestroy()
@Component({
  selector: "app-basic-walk",
  templateUrl: "./basic-walk.component.html",
  styleUrl: "./basic-walk.component.scss",
})
export class BasicWalkComponent implements ChapterComponent {
  @Input() data!: {
    note: string;
    track: TrackId;
    imageUrl: string;
    storyDate: string;
    text?: string;
    mapUrl?: string;
  };
  @Output() end = new EventEmitter<void>();

  openHelp() {}

  currentChapterId = this.storyController.currentChapter.pipe(
    untilDestroyed(this),
    map((chapter) => chapter?.id ?? null),
  );

  constructor(private readonly storyController: StoryController<ChapterId, StoryState>) {}
}
