import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-checkpoint",
  templateUrl: "./checkpoint.component.html",
  styleUrl: "./checkpoint.component.scss",
})
export class CheckpointComponent implements ChapterComponent {
  @Input() data!: {
    question: string;
  };

  @Output() end = new EventEmitter<void>();

  showConfirmButton: boolean = false;
}
