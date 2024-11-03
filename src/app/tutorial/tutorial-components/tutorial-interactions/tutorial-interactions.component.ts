import { Component, EventEmitter, Output } from "@angular/core";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-interactions",
  templateUrl: "./tutorial-interactions.component.html",
  styleUrl: "./tutorial-interactions.component.scss",
})
export class TutorialInteractionsComponent implements TutorialStepComponent {
  @Output() next = new EventEmitter<void>();
}
