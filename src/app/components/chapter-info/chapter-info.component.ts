import { Component, Input } from "@angular/core";
import { ChapterData, ChapterDefinition, ChapterId } from "src/app/data/chapters";

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
