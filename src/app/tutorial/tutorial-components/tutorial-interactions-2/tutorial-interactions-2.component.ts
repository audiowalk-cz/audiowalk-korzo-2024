import { Component, EventEmitter } from "@angular/core";
import { QuestionOption } from "src/app/shared/components/question-options/question-options.component";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-interactions-2",
  templateUrl: "./tutorial-interactions-2.component.html",
  styleUrl: "./tutorial-interactions-2.component.scss",
})
export class TutorialInteractions2Component implements TutorialStepComponent {
  next = new EventEmitter<void>();

  question = "Petr se tě ptá, jestli je ti zima.\n\nCo mu odpovíš?";
  questionOptions: QuestionOption[] = [
    { label: "Je mi zima", value: "a" },
    { label: "Ne, není mi zima", value: "b" },
  ];
}
