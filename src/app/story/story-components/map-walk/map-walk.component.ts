import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PlayerController } from "@audiowalk/sdk";
import { TrackId } from "src/app/data/tracks";
import { MediaService } from "src/app/shared/services/media.service";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-map-walk",
  templateUrl: "./map-walk.component.html",
  styleUrl: "./map-walk.component.scss",
})
export class MapWalkComponent implements ChapterComponent, OnInit {
  @Input() data!: {
    text: string;
    mapUrl: string;
    confirmationText: string;
    ambientTrack: TrackId;
  };

  @Output() end = new EventEmitter<void>();

  private ambientPlayer?: PlayerController;

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit(): void {
    this.ambientPlayer = this.mediaService.playAmbient(this.data.ambientTrack);
  }

  ngOnDestroy(): void {
    this.ambientPlayer?.stop();
  }
}
