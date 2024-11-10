import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { map } from "rxjs";
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

  versionUpdates = this.swUpdate.versionUpdates.pipe(map((vu) => vu.type));

  constructor(private readonly swUpdate: SwUpdate) {}
}
