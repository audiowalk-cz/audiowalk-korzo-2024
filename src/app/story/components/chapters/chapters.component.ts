import { Component, EventEmitter, Output } from "@angular/core";
import { ChapterId, story } from "src/app/data/story";
import { MediaService } from "src/app/shared/services/media.service";

@Component({
  selector: "app-chapters",
  templateUrl: "./chapters.component.html",
  styleUrls: ["./chapters.component.scss"],
})
export class ChaptersComponent {
  @Output() select = new EventEmitter<ChapterId>();

  chapters = Object.values(story.chapters).filter((chapter) => !!chapter.metadata.respawn);

  constructor(private mediaService: MediaService) {}

  selectChapter(chapterId: ChapterId): void {
    this.select.emit(chapterId);
  }
}
