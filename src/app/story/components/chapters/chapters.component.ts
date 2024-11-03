import { Component } from "@angular/core";
import { story } from "src/app/data/story";
import { MediaService } from "src/app/shared/services/media.service";

@Component({
  selector: "app-chapters",
  templateUrl: "./chapters.component.html",
  styleUrls: ["./chapters.component.scss"],
})
export class ChaptersComponent {
  chapters = Object.values(story.chapters).filter((chapter) => !!chapter.metadata.respawn);

  constructor(private mediaService: MediaService) {}
}
