import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TrackId } from "src/app/data/tracks";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-basic-walk",
  templateUrl: "./basic-walk.component.html",
  styleUrl: "./basic-walk.component.scss",
})
export class BasicWalkComponent implements ChapterComponent {
  @Input() data!: {
    track: TrackId;
  };
  @Output() end = new EventEmitter<void>();
}
