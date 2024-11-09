import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoryController } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map } from "rxjs";
import { ChapterId, StoryState } from "src/app/data/story";
import { AnalyticsService } from "src/app/shared/services/analytics.service";
import { MediaService } from "src/app/shared/services/media.service";

@UntilDestroy()
@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrl: "./intro.component.scss",
})
export class IntroComponent {
  isMobile = window.screen.width < window.screen.height;
  isInAppBrowser = window.navigator.userAgent.match(/(Instagram|FBAN|FBAV)/);
  currentUrl = window.location.origin;

  referrer = document.referrer;

  storyStateExists = this.storyController.storyState
    .pipe(untilDestroyed(this))
    .pipe(map((state) => !!state.storyStartedAt));

  constructor(
    public mediaService: MediaService,
    private analytics: AnalyticsService,
    private storyController: StoryController<ChapterId, StoryState>,
    private router: Router,
  ) {
    // get user agent
  }

  async download() {
    this.analytics.trackEvent("downloadTracks", {});
    await this.mediaService.downloadTracks();
  }

  async delete() {
    this.analytics.trackEvent("deleteTracks", {});
    await this.mediaService.deleteTracks();
  }

  async resetStory() {
    await this.storyController.resetStory();
    this.router.navigate(["/tutorial"]);
  }
}
