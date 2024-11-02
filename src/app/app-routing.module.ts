import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "walk", loadChildren: () => import("./story/story.module").then((m) => m.StoryModule) },
  { path: "tutorial", loadChildren: () => import("./tutorial/tutorial.module").then((m) => m.TutorialModule) },
  { path: "", loadChildren: () => import("./core/core.module").then((m) => m.CoreModule) },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
