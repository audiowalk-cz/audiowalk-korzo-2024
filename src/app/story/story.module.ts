import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StoryContainerComponent } from "./components/story-container/story-container.component";
import { WalkComponent } from "./pages/walk/walk.component";
import { BasicWalkComponent } from "./story-components/basic-walk/basic-walk.component";
import { StoryRoutingModule } from "./story-routing.module";

@NgModule({
  declarations: [StoryContainerComponent, WalkComponent, BasicWalkComponent],
  imports: [CommonModule, StoryRoutingModule],
})
export class StoryModule {}
