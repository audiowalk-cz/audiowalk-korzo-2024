import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PlayerController } from "@audiowalk/sdk";
import { TrackId } from "src/app/data/tracks";
import { MediaService } from "src/app/shared/services/media.service";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-materials",
  templateUrl: "./materials.component.html",
  styleUrl: "./materials.component.scss",
})
export class MaterialsComponent implements ChapterComponent {
  @Input() data!: {
    quote?: string;
    materials: { label: string; url: string }[];
    ambientTrack?: TrackId;
  };

  @Output() end = new EventEmitter<void>();

  showMaterials = true;
  showIndex = 0;
  showImage = false;

  private ambientPLayer?: PlayerController;

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.playJingle();
    if (this.data.ambientTrack) {
      this.ambientPLayer = this.mediaService.playAmbient(this.data.ambientTrack);
    }
  }

  ngOnDestroy(): void {
    this.ambientPLayer?.stop();
  }

  prevMaterial(): void {
    this.showIndex = Math.max(0, this.showIndex - 1);
  }
  nextMaterial(): void {
    this.showIndex = Math.min(this.data.materials.length - 1, this.showIndex + 1);
  }

  openImage(): void {
    this.showImage = true;
  }

  closeImage(): void {
    this.showImage = false;
  }

}
