import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface QuestionOption {
  label: string;
  value: string;
}

@Component({
  selector: "app-question-options",
  templateUrl: "./question-options.component.html",
  styleUrl: "./question-options.component.scss",
})
export class QuestionOptionsComponent {
  @Input() options!: QuestionOption[];

  @Input() value?: string;

  @Output() select = new EventEmitter<string>();
}
