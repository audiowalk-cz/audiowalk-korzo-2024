import { Component, Input } from "@angular/core";
import { Track } from "../../services/media.service";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent {
  @Input() track!: Track;

  offline = !navigator.onLine;
}
