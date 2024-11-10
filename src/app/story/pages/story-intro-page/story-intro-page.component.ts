import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoryController } from "@audiowalk/sdk";
import { UntilDestroy } from "@ngneat/until-destroy";
import { ChapterId, StoryState } from "src/app/data/story";

@UntilDestroy()
@Component({
  selector: "app-story-intro-page",
  templateUrl: "./story-intro-page.component.html",
  styleUrl: "./story-intro-page.component.scss",
})
export class StoryIntroPageComponent {
  constructor(
    private readonly storyController: StoryController<ChapterId, StoryState>,
    private router: Router,
  ) {}

  async startNewStory() {
    // await this.storyController.resetStory();

    // await this.storyController.updateState({
    //   storyStartedAt: new Date().toISOString(),
    // });

    this.router.navigate(["/story/walk"]);
  }
}
