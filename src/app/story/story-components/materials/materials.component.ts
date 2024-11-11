import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PlayerController } from "@audiowalk/sdk";
import { TrackId } from "src/app/data/tracks";
import { MediaService } from "src/app/shared/services/media.service";
import { ChapterComponent } from "../../components/story-container/story-container.component";
declare var bootstrap: any; // Make sure to declare bootstrap if TypeScript complains

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

  private ambientPLayer?: PlayerController;

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.playJingle();
    if (this.data.ambientTrack) {
      this.ambientPLayer = this.mediaService.playAmbient(this.data.ambientTrack);
    }

    const carouselElement = document.getElementById('carouselExampleControls');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 0, // Adjust the interval as needed
      wrap: true
    });
  }

  ngOnDestroy(): void {
    this.ambientPLayer?.stop();
  }
}
