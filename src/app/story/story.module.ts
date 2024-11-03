import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { StoryContainerComponent } from "./components/story-container/story-container.component";
import { WalkPageComponent } from "./pages/walk-page/walk-page.component";
import { BasicWalkComponent } from "./story-components/basic-walk/basic-walk.component";
import { InteractionComponent } from "./story-components/interaction/interaction.component";
import { IntroComponent } from "./story-components/intro/intro.component";
import { MaterialsComponent } from "./story-components/materials/materials.component";
import { StoryRoutingModule } from "./story-routing.module";

@NgModule({
  declarations: [
    StoryContainerComponent,
    WalkPageComponent,
    BasicWalkComponent,
    InteractionComponent,
    MaterialsComponent,
    IntroComponent,
  ],
  imports: [CommonModule, StoryRoutingModule, SharedModule],
})
export class StoryModule {}
