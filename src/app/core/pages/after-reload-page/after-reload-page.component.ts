import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MediaService } from "src/app/shared/services/media.service";

@Component({
  selector: "app-after-reload-page",
  templateUrl: "./after-reload-page.component.html",
  styleUrl: "./after-reload-page.component.scss",
})
export class AfterReloadPageComponent {
  constructor(
    private readonly router: Router,
    private readonly mediaService: MediaService,
  ) {}

  async continueOldStory() {
    await this.preloadTracks();
    this.router.navigate(["/story/walk"]);
  }

  async preloadTracks() {
    await this.mediaService.preloadControllers();
  }
}
