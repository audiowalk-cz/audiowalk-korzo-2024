import { Component, Input } from "@angular/core";

@Component({
  selector: "app-container-footer",
  templateUrl: "./container-footer.component.html",
  styleUrl: "./container-footer.component.scss",
  host: {
    // "[class"
    "[class.d-flex]": "true",
    "[class.justify-content-center]": "true",
  },
})
export class ContainerFooterComponent {
}
