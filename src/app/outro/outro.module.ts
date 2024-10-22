import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { EndComponent } from "./pages/end/end.component";
import { ShareComponent } from "./pages/share/share.component";

const routes: Routes = [
  { path: "share", component: ShareComponent },
  { path: "end", component: EndComponent },
];

@NgModule({
  declarations: [ShareComponent, EndComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class OutroModule {}
