import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PlayerStatus } from "@audiowalk/sdk";

@Component({
  selector: "app-play-button",
  templateUrl: "./play-button.component.html",
  styleUrls: ["./play-button.component.scss"],
})
export class PlayButtonComponent {
  @Input() status: PlayerStatus | null = null;
  @Output() play = new EventEmitter<void>();
  @Output() pause = new EventEmitter<void>();
}
