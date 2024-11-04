import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelpPageComponent } from "./pages/help-page/help-page.component";
import { StoryIntroPageComponent } from "./pages/story-intro-page/story-intro-page.component";
import { WalkPageComponent } from "./pages/walk-page/walk-page.component";

const routes: Routes = [
  { path: "walk", component: WalkPageComponent },
  { path: "help", component: HelpPageComponent },
  { path: "intro", component: StoryIntroPageComponent },
  { path: "", redirectTo: "intro", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryRoutingModule {}
