import { Component, ErrorHandler, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { config } from "src/config";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  config = config;
  constructor(
    public errorHandler: ErrorHandler,
    private router: Router,
  ) {}

  ngOnInit() {
    const route = window.location.pathname;

    if (route.startsWith("/story")) {
      this.router.navigate(["/after-reload"]);
    }
  }
}
