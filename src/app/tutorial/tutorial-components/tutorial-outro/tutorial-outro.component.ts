import { Component, EventEmitter, Output } from "@angular/core";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-outro",
  templateUrl: "./tutorial-outro.component.html",
  styleUrl: "./tutorial-outro.component.scss",
})
export class TutorialOutroComponent implements TutorialStepComponent {
  @Output() next = new EventEmitter<void>();
}
