import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TutorialPageComponent } from "./pages/tutorial-page/tutorial-page.component";

const routes: Routes = [{ path: "", component: TutorialPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class TutorialRoutingModule {}
