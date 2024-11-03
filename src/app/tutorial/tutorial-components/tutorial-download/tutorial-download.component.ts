import { Component, EventEmitter, Output } from "@angular/core";
import { AnalyticsService } from "src/app/shared/services/analytics.service";
import { MediaService } from "src/app/shared/services/media.service";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-download",
  templateUrl: "./tutorial-download.component.html",
  styleUrls: ["./tutorial-download.component.scss"],
})
export class TutorialDownloadComponent implements TutorialStepComponent {
  @Output() next = new EventEmitter<void>();

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
