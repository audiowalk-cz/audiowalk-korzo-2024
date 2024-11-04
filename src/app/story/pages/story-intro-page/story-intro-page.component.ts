import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoryController } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ChapterId, StoryState } from "src/app/data/story";

@UntilDestroy()
@Component({
  selector: "app-story-intro-page",
  templateUrl: "./story-intro-page.component.html",
  styleUrl: "./story-intro-page.component.scss",
})
export class StoryIntroPageComponent {
  isFromBeginning = true;

  constructor(
    private storyController: StoryController<ChapterId, StoryState>,
    private router: Router,
  ) {
    storyController.storyState.pipe(untilDestroyed(this)).subscribe((state) => {
      this.isFromBeginning = !state.storyStartedAt;
    });
  }

  async startStory() {
    await this.storyController.updateState((state) => ({
      ...state,
      storyStartedAt: state.storyStartedAt ?? new Date().toISOString(),
    }));
    this.router.navigate(["/story/walk"]);
  }

  async resetStory() {
    await this.storyController.resetStory();
    return this.startStory();
  }
}
