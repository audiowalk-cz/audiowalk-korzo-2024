import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WalkPageComponent } from "./pages/walk-page/walk-page.component";

const routes: Routes = [{ path: "", component: WalkPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryRoutingModule {}
