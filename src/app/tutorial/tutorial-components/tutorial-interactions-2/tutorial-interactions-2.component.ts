import { Component, EventEmitter } from "@angular/core";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-interactions-2",
  templateUrl: "./tutorial-interactions-2.component.html",
  styleUrl: "./tutorial-interactions-2.component.scss",
})
export class TutorialInteractions2Component implements TutorialStepComponent {
  next = new EventEmitter<void>();
}
