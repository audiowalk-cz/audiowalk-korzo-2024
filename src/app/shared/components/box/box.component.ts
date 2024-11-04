import { Component } from "@angular/core";

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html",
  styleUrl: "./box.component.scss",
  host: {
    class: "p-1",
  },
})
export class BoxComponent {}
