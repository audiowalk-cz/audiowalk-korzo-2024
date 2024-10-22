import { Component } from "@angular/core";
import { MediaService } from "src/app/shared/services/media.service";
import { Chapters } from "src/app/story/data/chapters";

@Component({
  selector: "app-chapters",
  templateUrl: "./chapters.component.html",
  styleUrls: ["./chapters.component.scss"],
})
export class ChaptersComponent {
  chapters = Chapters;

  constructor(private audioService: MediaService) {}
}
