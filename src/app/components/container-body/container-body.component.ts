import { Component, Input } from "@angular/core";

@Component({
  selector: "app-container-body",
  templateUrl: "./container-body.component.html",
  styleUrl: "./container-body.component.scss",
  host: {
    "[class.flex-grow-1]": "true",
  },
})
export class ContainerBodyComponent {
}
