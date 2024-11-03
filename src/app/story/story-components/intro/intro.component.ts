import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TrackId } from "src/app/data/tracks";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrl: "./intro.component.scss",
})
export class IntroComponent implements ChapterComponent {
  @Input() data!: {
    track: TrackId;
  };

  @Output() end = new EventEmitter<void>();
}
