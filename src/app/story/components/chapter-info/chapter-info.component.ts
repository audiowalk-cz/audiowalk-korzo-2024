import { Component, Input } from "@angular/core";
import { ChapterId } from "src/app/data/chapters";
import { Chapter } from "src/app/story/components/story-container/story-container.component";

@Component({
  selector: "app-chapter-info",
  templateUrl: "./chapter-info.component.html",
  styleUrls: ["./chapter-info.component.scss"],
})
export class ChapterInfoComponent {
  @Input() chapter!: Chapter<ChapterId, any>;
  @Input() chapterIndex!: number;
  @Input() chapterCount!: number;
  showPhoto = false;
}
