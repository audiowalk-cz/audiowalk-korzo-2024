import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-question-box",
  templateUrl: "./question-box.component.html",
  styleUrl: "./question-box.component.scss",
})
export class QuestionBoxComponent {
  @Input() question!: string;
  @Output() end = new EventEmitter<void>();
}
