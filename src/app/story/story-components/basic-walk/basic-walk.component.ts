import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChapterData } from "src/app/data/chapters";
import { ChapterComponent } from "../../components/story-container/story-container.component";

@Component({
  selector: "app-basic-walk",
  templateUrl: "./basic-walk.component.html",
  styleUrl: "./basic-walk.component.scss",
})
export class BasicWalkComponent implements ChapterComponent<ChapterData> {
  @Input() data!: ChapterData;
  @Output() end = new EventEmitter<void>();
}
