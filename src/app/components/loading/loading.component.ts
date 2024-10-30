import { Component, EventEmitter, Output } from "@angular/core";
import * as packageJson from "../../../../package.json";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrl: "./loading.component.scss",
})
export class LoadingComponent implements LoadingComponent {
  version = packageJson.version;

  loadingStep = 0;

  @Output() end = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingStep = 1;
    }, 2000);
  }

  openApp() {
    setTimeout(() => {
      this.end.emit();
    }, 1500);
  }
}
