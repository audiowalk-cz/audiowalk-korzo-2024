import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoryController } from "@audiowalk/sdk";
import { ChapterId, ChapterMetadata, StoryState } from "src/app/data/story";
import { Chapter } from "../../components/story-container/story-container.component";
import { Location } from "@angular/common";

@Component({
  selector: "app-help-page",
  templateUrl: "./help-page.component.html",
  styleUrl: "./help-page.component.scss",
})
export class HelpPageComponent {
  storyState = this.storyController.storyState;

  currentChapter = this.storyController.currentChapter;

  constructor(
    private readonly storyController: StoryController<
      ChapterId,
      StoryState,
      Chapter<ChapterId, any, StoryState, ChapterMetadata>
    >,
    private readonly router: Router,
    private readonly location: Location
  ) {}

  async resetStory() {
    // TODO: better confirmation dialog
    const confirmation = window.confirm("Opravdu chcete resetovat příběh?");
    if (!confirmation) return;

    await this.storyController.resetStory();

    this.router.navigate(["/story"]);
  }

  async back() {
    this.location.back();
  }

  async selectChapter(chapterId: ChapterId) {
    await this.storyController.setChapter(chapterId);
  }
}
