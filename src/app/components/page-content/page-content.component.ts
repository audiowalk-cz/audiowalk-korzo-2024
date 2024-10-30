import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-content",
  templateUrl: "./page-content.component.html",
  styleUrls: ["./page-content.component.scss"],
  host: {
    "[class.align-center]": 'align === "center"',
  },
})
export class PageContentComponent {
  @Input() align?: "center";
}
