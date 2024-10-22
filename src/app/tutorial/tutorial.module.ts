import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TutorialComponent } from "./pages/tutorial/tutorial.component";

const routes: Routes = [{ path: "", component: TutorialComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TutorialModule {}
