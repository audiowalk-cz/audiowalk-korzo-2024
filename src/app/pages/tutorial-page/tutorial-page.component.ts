import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { TutorialStep } from "src/app/components/tutorial-container/tutorial-container.component";
import { TutorialSteps } from "src/app/data/tutorial";

@UntilDestroy()
@Component({
  selector: "app-tutorial",
  templateUrl: "./tutorial-page.component.html",
  styleUrls: ["./tutorial-page.component.scss"],
})
export class TutorialPageComponent {
  readonly tutorialSteps: TutorialStep[] = TutorialSteps;

  constructor(private readonly router: Router) {}

  endTutorial() {
    this.router.navigate(["/intro"]);
  }
}
