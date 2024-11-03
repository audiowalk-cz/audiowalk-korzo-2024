import { Component, EventEmitter, Input, Output } from "@angular/core";
import { StoryState } from "src/app/data/story";
import { TrackId } from "src/app/data/tracks";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-interaction",
  templateUrl: "./interaction.component.html",
  styleUrl: "./interaction.component.scss",
})
export class InteractionComponent implements ChapterComponent {
  @Input() data!: {
    question: string;
    answerProperty: keyof StoryState;
    options: { label: string; track?: TrackId; value: string }[];
    ambientTrack: TrackId;
  };

  @Output() end = new EventEmitter<void>();
}
