import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { TutorialSteps } from "src/app/data/tutorial";
import { TutorialStep } from "src/app/tutorial/components/tutorial-container/tutorial-container.component";

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
