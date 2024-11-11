import { Component, EventEmitter, Input, Output } from "@angular/core";
import { QuestionOption } from "../question-options/question-options.component";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrl: "./question.component.scss",
})
export class QuestionComponent {
  @Input() title: string = 'Teď odpověz<br />na otázku:';
  @Input() question!: string;
  @Input() options!: QuestionOption[];
  @Input() value?: string;

  questionLoaded: boolean = false;

  @Output() select = new EventEmitter<string>();
}
