import { Component } from "@angular/core";
import { AnalyticsService } from "src/app/shared/services/analytics.service";
import { MediaService } from "src/app/shared/services/media.service";

@Component({
  selector: "app-preload-page",
  templateUrl: "./preload-page.component.html",
  styleUrl: "./preload-page.component.scss",
})
export class PreloadPageComponent {
  downloadStatus = this.mediaService.downloadStatus;

  constructor(
    private mediaService: MediaService,
    private analytics: AnalyticsService,
  ) {}

  async download() {
    this.analytics.trackEvent("downloadTracks", {});
    await this.mediaService.downloadTracks();
  }

  async delete() {
    this.analytics.trackEvent("deleteTracks", {});
    await this.mediaService.deleteTracks();
  }
}
