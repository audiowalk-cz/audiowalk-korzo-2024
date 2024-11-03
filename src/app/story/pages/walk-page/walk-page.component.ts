import { Component } from "@angular/core";
import { story } from "src/app/data/chapters";

@Component({
  selector: "app-walk-page",
  templateUrl: "./walk-page.component.html",
  styleUrls: ["./walk-page.component.scss"],
})
export class WalkPageComponent {
  story = story;

  constructor() {}
}
