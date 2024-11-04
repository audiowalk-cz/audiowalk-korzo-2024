import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TypePipeOptions } from "../../pipes/type.pipe";

@Component({
  selector: "app-type-text",
  templateUrl: "./type-text.component.html",
  styleUrl: "./type-text.component.scss",
})
export class TypeTextComponent {
  @Input() text!: string;
  @Output() end = new EventEmitter<void>();

  typeOptions: TypePipeOptions = {
    onEnd: () => this.end.emit(),
  };
}
