import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  host: {
  },
})
export class HeaderComponent {
  @Input() showHelp: boolean = true;
  @Input() text: string = "Header";
}
