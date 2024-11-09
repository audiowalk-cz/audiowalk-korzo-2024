import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TrackId } from "src/app/data/tracks";
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

  showMaterials = false;
}
