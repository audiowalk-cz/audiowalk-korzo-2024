import { Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "app-story-intro-page",
  templateUrl: "./story-intro-page.component.html",
  styleUrl: "./story-intro-page.component.scss",
})
export class StoryIntroPageComponent {}
