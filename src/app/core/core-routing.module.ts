import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChaptersComponent } from "../story/components/chapters/chapters.component";
import { EndComponent } from "./pages/end/end.component";
import { IntroComponent } from "./pages/intro/intro.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PreloadPageComponent } from "./pages/preload-page/preload-page.component";
import { SourcesComponent } from "./pages/sources/sources.component";
import { BonusComponent } from "./pages/bonus/bonus.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "intro", component: IntroComponent },
  { path: "chapters", component: ChaptersComponent },
  { path: "download", component: PreloadPageComponent },
  { path: "end", component: EndComponent },
  { path: "sources", component: SourcesComponent },
  { path: "bonus", component: BonusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
