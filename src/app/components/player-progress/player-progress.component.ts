import { Component, Input } from "@angular/core";

@Component({
  selector: "app-player-progress",
  templateUrl: "./player-progress.component.html",
  styleUrls: ["./player-progress.component.scss"],
})
export class PlayerProgressComponent {
  @Input() progress: number | null = null;
  @Input() totalTime: number | null = null;
  @Input() currentTime: number | null = null;
}
