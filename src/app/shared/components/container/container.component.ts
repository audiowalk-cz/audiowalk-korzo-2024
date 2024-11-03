import { Component, Input } from "@angular/core";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrl: "./container.component.scss",
  host: {},
})
export class ContainerComponent {
  @Input() align?: "center" | "left" = "left";
  @Input() padding: boolean = true;
  @Input() width: "full" | "mobile" = "full";
  @Input() justify: "center" | "space-between" | "flex-start" = "center";
}
