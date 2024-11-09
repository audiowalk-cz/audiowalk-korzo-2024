import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-map-walk",
  templateUrl: "./map-walk.component.html",
  styleUrl: "./map-walk.component.scss",
})
export class MapWalkComponent implements ChapterComponent {
  @Input() data!: {
    text: string;
    mapUrl: string;
    confirmationText: string;
  };

  @Output() end = new EventEmitter<void>();
}
