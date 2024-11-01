import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AnalyticsService } from "src/app/services/analytics.service";
import { DownloadStatus, MediaService } from "src/app/services/media.service";

@Component({
  selector: "app-media-download",
  templateUrl: "./media-download.component.html",
  styleUrl: "./media-download.component.scss",
})
export class MediaDownloadComponent {
  @Input() showDelete = true;

  @Output() status = new EventEmitter<DownloadStatus>();

  public downloadStatus = this.mediaService.downloadStatus;
  public downloadProgress = this.mediaService.downloadProgress;

  constructor(
    private mediaService: MediaService,
    private analytics: AnalyticsService,
  ) {
    this.downloadStatus.subscribe(this.status);
  }

  async download() {
    this.analytics.trackEvent("downloadTracks", {});
    await this.mediaService.downloadTracks();
  }

  async delete() {
    this.analytics.trackEvent("deleteTracks", {});
    await this.mediaService.deleteTracks();
  }
}
