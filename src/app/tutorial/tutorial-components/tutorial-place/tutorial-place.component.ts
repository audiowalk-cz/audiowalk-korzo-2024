import { Component, output } from "@angular/core";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-place",
  templateUrl: "./tutorial-place.component.html",
  styleUrl: "./tutorial-place.component.scss",
})
export class TutorialPlaceComponent implements TutorialStepComponent {
  next = output();
}
