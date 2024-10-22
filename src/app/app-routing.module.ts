import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorsComponent } from "./pages/authors/authors.component";
import { ChaptersComponent } from "./pages/chapters/chapters.component";
import { EndComponent } from "./pages/end/end.component";
import { HomeComponent } from "./pages/home/home.component";
import { LegalComponent } from "./pages/legal/legal.component";
import { ShareComponent } from "./pages/share/share.component";
import { TutorialComponent } from "./pages/tutorial/tutorial.component";
import { WalkComponent } from "./pages/walk/walk.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "walk", component: WalkComponent },
  { path: "tutorial", component: TutorialComponent },
  { path: "end", component: EndComponent },
  { path: "share", component: ShareComponent },
  { path: "chapters", component: ChaptersComponent },
  { path: "legal", component: LegalComponent },
  { path: "authors", component: AuthorsComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
