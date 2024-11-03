import { Component, EventEmitter, Output } from "@angular/core";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-intro",
  templateUrl: "./tutorial-intro.component.html",
  styleUrl: "./tutorial-intro.component.scss",
})
export class TutorialIntroComponent implements TutorialStepComponent {
  @Output() next = new EventEmitter<void>();
}
