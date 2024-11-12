import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PlayerStatus } from "@audiowalk/sdk";

@Component({
  selector: "app-rewind-button",
  templateUrl: "./rewind-button.component.html",
  styleUrls: ["./rewind-button.component.scss"],
})
export class RewindButtonComponent {
  @Input() status: PlayerStatus | null = null;
  @Output() rewind = new EventEmitter<void>();
}
