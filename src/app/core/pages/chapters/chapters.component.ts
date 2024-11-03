import { Component } from "@angular/core";
import { story } from "src/app/data/chapters";
import { MediaService } from "src/app/shared/services/media.service";

@Component({
  selector: "app-chapters",
  templateUrl: "./chapters.component.html",
  styleUrls: ["./chapters.component.scss"],
})
export class ChaptersComponent {
  chapters = story.chapters;

  constructor(private mediaService: MediaService) {}
}
