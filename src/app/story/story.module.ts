import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ChaptersComponent } from "./components/chapters/chapters.component";
import { StoryContainerComponent } from "./components/story-container/story-container.component";
import { HelpPageComponent } from "./pages/help-page/help-page.component";
import { WalkPageComponent } from "./pages/walk-page/walk-page.component";
import { BasicWalkComponent } from "./story-components/basic-walk/basic-walk.component";
import { CheckpointComponent } from "./story-components/checkpoint/checkpoint.component";
import { InteractionComponent } from "./story-components/interaction/interaction.component";
import { IntroComponent } from "./story-components/intro/intro.component";
import { MapWalkComponent } from "./story-components/map-walk/map-walk.component";
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
    HelpPageComponent,
    ChaptersComponent,
    CheckpointComponent,
    MapWalkComponent,
  ],
  imports: [CommonModule, StoryRoutingModule, SharedModule],
})
export class StoryModule {}
