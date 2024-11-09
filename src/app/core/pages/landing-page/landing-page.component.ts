import { Component } from "@angular/core";
import * as packageJson from "../../../../../package.json";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {
  mobileUrl = `${window.location.origin}/intro`;
  isMobile = window.screen.width < window.screen.height;

  version = packageJson.version;
}
