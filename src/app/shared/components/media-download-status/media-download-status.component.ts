import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DownloadStatus, MediaService } from "src/app/shared/services/media.service";

@Component({
  selector: "app-media-download-status",
  templateUrl: "./media-download-status.component.html",
  styleUrl: "./media-download-status.component.scss",
})
export class MediaDownloadComponent {
  @Input() showDelete = true;

  @Output() status = new EventEmitter<DownloadStatus>();

  public downloadStatus = this.mediaService.downloadStatus;
  public downloadProgress = this.mediaService.downloadProgress;

  constructor(private mediaService: MediaService) {
    this.downloadStatus.subscribe(this.status);
  }
}
