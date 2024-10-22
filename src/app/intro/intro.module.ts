import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { IntroComponent } from "./pages/intro/intro.component";
import { LoadingComponent } from "./pages/loading/loading.component";

const routes: Routes = [
  { path: "", component: LoadingComponent },
  { path: "intro", component: IntroComponent },
];

@NgModule({
  declarations: [IntroComponent, LoadingComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class IntroModule {}
