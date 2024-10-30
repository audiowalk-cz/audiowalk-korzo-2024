import { Component, EventEmitter, Input, OnInit, Output, OutputEmitterRef, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

export interface TutorialStepComponent {
  next: OutputEmitterRef<void> | EventEmitter<void>;
}

export type TutorialStep = new (...args: any[]) => TutorialStepComponent;

@UntilDestroy()
@Component({
  selector: "app-tutorial-container",
  templateUrl: "./tutorial-container.component.html",
  styleUrl: "./tutorial-container.component.scss",
})
export class TutorialContainerComponent implements OnInit {
  @Input() steps: TutorialStep[] = [];

  @Output() end = new EventEmitter<void>();

  currentStep?: TutorialStep;

  constructor(private viewContainer: ViewContainerRef, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      const step = this.deserializeStep(params["step"]);

      if (!Number.isInteger(step) || this.steps[step] === undefined) return this.openFirstStep();

      this.currentStep = this.steps[step];
      this.loadStepComponent(this.currentStep);
    });
  }

  loadStepComponent(component: new () => TutorialStepComponent) {
    this.viewContainer.clear();

    const componentRef = this.viewContainer.createComponent(component);
    componentRef.instance.next.subscribe(() => this.nextStep());
  }

  openStep(step: number, replaceUrl = false) {
    const queryParams = {
      ...this.route.snapshot.queryParams,
      step: this.serializeStep(step),
    };

    this.router.navigate(["."], { queryParams, replaceUrl, relativeTo: this.route });
  }

  openFirstStep() {
    this.openStep(0, true);
  }

  nextStep() {
    const i = this.currentStep ? this.steps.indexOf(this.currentStep) : 0;

    if (i === this.steps.length - 1) {
      this.end.emit();
    } else {
      this.openStep(Math.min(i + 1, this.steps.length - 1));
    }
  }

  private serializeStep(step: number) {
    return String(step + 1);
  }

  private deserializeStep(step: string) {
    return parseInt(step) - 1;
  }
}
