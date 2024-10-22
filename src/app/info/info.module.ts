import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthorsComponent } from "./pages/authors/authors.component";
import { LegalComponent } from "./pages/legal/legal.component";

const routes: Routes = [
  { path: "authors", component: AuthorsComponent },
  { path: "legal", component: LegalComponent },
];

@NgModule({
  declarations: [LegalComponent, AuthorsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class InfoModule {}
