import { Component } from "@angular/core";
import { Chapters } from "src/app/data/chapters";

@Component({
  selector: "app-walk",
  templateUrl: "./walk.component.html",
  styleUrls: ["./walk.component.scss"],
})
export class WalkComponent {
  chapters = Chapters;

  initialChapter = Chapters["kapitola-1"].id;

  constructor() {}
}
