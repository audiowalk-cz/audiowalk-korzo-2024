import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TrackId } from "src/app/data/tracks";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-checkpoint",
  templateUrl: "./checkpoint.component.html",
  styleUrl: "./checkpoint.component.scss",
})
export class CheckpointComponent implements ChapterComponent {
  @Input() data!: {
    headerText: string;
    question: string;
    ambientTrack: TrackId;
    mapUrl?: string;
    confirmationText?: string;
  };

  @Output() end = new EventEmitter<void>();

  showConfirmButton: boolean = false;
}
