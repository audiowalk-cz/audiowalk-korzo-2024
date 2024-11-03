import { Component } from "@angular/core";
import { StoryController } from "@audiowalk/sdk";
import { ChapterId, ChapterMetadata, StoryState } from "src/app/data/story";
import { Chapter } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-help-page",
  templateUrl: "./help-page.component.html",
  styleUrl: "./help-page.component.scss",
})
export class HelpPageComponent {
  storyState = this.storyController.storyState;

  currentChapter = this.storyController.currentChapter;

  constructor(
    private storyController: StoryController<
      ChapterId,
      StoryState,
      Chapter<ChapterId, any, StoryState, ChapterMetadata>
    >,
  ) {}
}
