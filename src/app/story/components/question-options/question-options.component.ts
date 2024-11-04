import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-question-options",
  templateUrl: "./question-options.component.html",
  styleUrl: "./question-options.component.scss",
})
export class QuestionOptionsComponent {
  @Input() options!: {
    label: string;
    value: string;
  }[];

  @Input() value?: string;

  @Output() select = new EventEmitter<string>();
}
