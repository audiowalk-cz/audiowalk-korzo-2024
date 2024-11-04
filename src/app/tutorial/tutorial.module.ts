import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { TutorialContainerComponent } from "./components/tutorial-container/tutorial-container.component";
import { TutorialPageComponent } from "./pages/tutorial-page/tutorial-page.component";
import { TutorialAttentionComponent } from "./tutorial-components/tutorial-attention/tutorial-attention.component";
import { TutorialDownloadComponent } from "./tutorial-components/tutorial-download/tutorial-download.component";
import { TutorialInteractions2Component } from "./tutorial-components/tutorial-interactions-2/tutorial-interactions-2.component";
import { TutorialInteractionsComponent } from "./tutorial-components/tutorial-interactions/tutorial-interactions.component";
import { TutorialIntroComponent } from "./tutorial-components/tutorial-intro/tutorial-intro.component";
import { TutorialPlaceComponent } from "./tutorial-components/tutorial-place/tutorial-place.component";
import { TutorialSoundComponent } from "./tutorial-components/tutorial-sound/tutorial-sound.component";
import { TutorialRoutingModule } from "./tutorial-routing.module";

@NgModule({
  declarations: [
    TutorialAttentionComponent,
    TutorialContainerComponent,
    TutorialPageComponent,
    TutorialDownloadComponent,
    TutorialPlaceComponent,
    TutorialSoundComponent,
    TutorialIntroComponent,
    TutorialInteractionsComponent,
    TutorialInteractions2Component,
  ],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
