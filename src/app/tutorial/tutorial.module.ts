import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { TutorialRoutingModule } from "./tutorial-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
