import { Component, Input } from "@angular/core";
import { ChapterData, ChapterId } from "src/app/data/chapters";
import { ChapterDefinition } from "src/app/story/components/story-container/story-container.component";

@Component({
  selector: "app-chapter-info",
  templateUrl: "./chapter-info.component.html",
  styleUrls: ["./chapter-info.component.scss"],
})
export class ChapterInfoComponent {
  @Input() chapter!: ChapterDefinition<ChapterId, ChapterData>;
  @Input() chapterIndex!: number;
  @Input() chapterCount!: number;
  showPhoto = false;
}
