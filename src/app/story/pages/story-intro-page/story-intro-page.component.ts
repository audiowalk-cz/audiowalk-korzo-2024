import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoryController } from "@audiowalk/sdk";
import { UntilDestroy } from "@ngneat/until-destroy";
import { ChapterId, StoryState } from "src/app/data/story";
import { AnalyticsService } from "src/app/shared/services/analytics.service";
import { MediaService } from "src/app/shared/services/media.service";

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
    private readonly mediaService: MediaService,
    private analytics: AnalyticsService,
  ) {}

  async startNewStory() {
    // await this.storyController.resetStory();

    // await this.storyController.updateState({
    //   storyStartedAt: new Date().toISOString(),
    // });

    this.analytics.trackEvent("storyStart", {});

    this.router.navigate(["/story/walk"]);
  }
}
