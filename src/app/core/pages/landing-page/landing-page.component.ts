import { Component } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {
  mobileUrl = `${window.location.origin}/intro`;
  isMobile = window.screen.width < window.screen.height;
}
