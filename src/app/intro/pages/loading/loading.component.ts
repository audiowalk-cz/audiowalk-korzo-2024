import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as packageJson from "../../../../../package.json";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrl: "./loading.component.scss",
})
export class LoadingComponent implements LoadingComponent {
  version = packageJson.version;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/intro"]);
    }, 3000);
  }
}
