import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelpPageComponent } from "./pages/help-page/help-page.component";
import { WalkPageComponent } from "./pages/walk-page/walk-page.component";

const routes: Routes = [
  { path: "", component: WalkPageComponent },
  { path: "help", component: HelpPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryRoutingModule {}
