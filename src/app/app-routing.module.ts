import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChaptersComponent } from "./pages/chapters/chapters.component";
import { IntroComponent } from "./pages/intro/intro.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PreloadPageComponent } from "./pages/preload-page/preload-page.component";
import { TutorialPageComponent } from "./pages/tutorial-page/tutorial-page.component";
import { WalkComponent } from "./pages/walk/walk.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "intro", component: IntroComponent },
  { path: "walk", component: WalkComponent },
  { path: "chapters", component: ChaptersComponent },
  { path: "tutorial", component: TutorialPageComponent },
  { path: "download", component: PreloadPageComponent },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
