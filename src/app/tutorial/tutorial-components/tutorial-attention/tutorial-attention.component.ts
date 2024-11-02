import { Component, EventEmitter, Output } from "@angular/core";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-attention",
  templateUrl: "./tutorial-attention.component.html",
  styleUrls: ["./tutorial-attention.component.scss"],
})
export class TutorialAttentionComponent implements TutorialStepComponent {
  @Output() next = new EventEmitter<void>();
}
