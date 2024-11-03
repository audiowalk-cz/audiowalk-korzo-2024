import { Component, Input } from "@angular/core";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrl: "./container.component.scss",
  host: {
    // "[class]": "'container width-' + width + ' align-' + align",
    // "[class.p-5]": "padding",
    "[class.h-100]": "true"
  },
})
export class ContainerComponent {
  @Input() align?: "center" | "left" = "left";
  @Input() padding: boolean = false;
  @Input() width: "full" | "mobile" = "full";
  @Input() flex: boolean = false;
  @Input() flexColumn: boolean = false;
}
