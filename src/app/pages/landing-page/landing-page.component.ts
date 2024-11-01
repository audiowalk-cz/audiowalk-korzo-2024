import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {
  loading = true;

  isMobile = window.screen.width < window.screen.height;

  mobileUrl = `${window.location.origin}`;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((params) => {
      if (params["loading"] === "false") this.loading = false;
    });
  }
}
