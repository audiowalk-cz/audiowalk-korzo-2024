import { Component, EventEmitter, Output } from "@angular/core";
import { TrackDefinition } from "src/app/data/tracks";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-sound",
  templateUrl: "./tutorial-sound.component.html",
  styleUrls: ["./tutorial-sound.component.scss"],
})
export class TutorialSoundComponent implements TutorialStepComponent {
  readonly testTrack: TrackDefinition = {
    id: "test",
    title: "Testovací nahrávka",
    url: "assets/audio/track-0.mp3",
    type: "audio",
    mimeType: "audio/mpeg",
  };

  @Output() next = new EventEmitter<void>();
}
