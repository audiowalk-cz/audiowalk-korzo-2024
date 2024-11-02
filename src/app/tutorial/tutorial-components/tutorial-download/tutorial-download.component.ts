import { Component, EventEmitter, Output } from "@angular/core";
import { TutorialStepComponent } from "../tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-download",
  templateUrl: "./tutorial-download.component.html",
  styleUrls: ["./tutorial-download.component.scss"],
})
export class TutorialDownloadComponent implements TutorialStepComponent {
  @Output() next = new EventEmitter<void>();

  downloaded = false;
}
