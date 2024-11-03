import { Component, EventEmitter, Output } from "@angular/core";
import { TrackId } from "src/app/data/tracks";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-sound",
  templateUrl: "./tutorial-sound.component.html",
  styleUrls: ["./tutorial-sound.component.scss"],
})
export class TutorialSoundComponent implements TutorialStepComponent {
  readonly track = TrackId.tutorial_test;

  @Output() next = new EventEmitter<void>();
}
