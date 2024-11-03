import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChaptersComponent } from "../story/components/chapters/chapters.component";
import { IntroComponent } from "./pages/intro/intro.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PreloadPageComponent } from "./pages/preload-page/preload-page.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "intro", component: IntroComponent },
  { path: "chapters", component: ChaptersComponent },
  { path: "download", component: PreloadPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
