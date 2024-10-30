import { Component } from "@angular/core";
import { ChapterDefinition } from "src/app/data/chapters";

@Component({
  selector: "app-story-container",
  templateUrl: "./story-container.component.html",
  styleUrl: "./story-container.component.scss",
})
export class StoryContainerComponent {
  currentChapter: ChapterDefinition | null = null;
}
