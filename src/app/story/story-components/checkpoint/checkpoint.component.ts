import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { PlayerController } from "@audiowalk/sdk";
import { TrackId } from "src/app/data/tracks";
import { MediaService } from "src/app/shared/services/media.service";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-checkpoint",
  templateUrl: "./checkpoint.component.html",
  styleUrl: "./checkpoint.component.scss",
})
export class CheckpointComponent implements ChapterComponent, OnInit, OnDestroy {
  @Input() data!: {
    headerText: string;
    question: string;
    ambientTrack: TrackId;
    mapUrl?: string;
    confirmationText?: string;
  };

  @Output() end = new EventEmitter<void>();

  showConfirmButton: boolean = false;

  private ambientPlayer?: PlayerController;

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.playJingle();
    if (this.data.ambientTrack) {
      this.ambientPlayer = this.mediaService.playAmbient(this.data.ambientTrack);
    }
  }

  ngOnDestroy(): void {
    this.ambientPlayer?.stop();
  }
}
