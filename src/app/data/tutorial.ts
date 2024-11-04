import { TutorialStep } from "../tutorial/components/tutorial-container/tutorial-container.component";
import { TutorialAttentionComponent } from "../tutorial/tutorial-components/tutorial-attention/tutorial-attention.component";
import { TutorialDownloadComponent } from "../tutorial/tutorial-components/tutorial-download/tutorial-download.component";
import { TutorialInteractions2Component } from "../tutorial/tutorial-components/tutorial-interactions-2/tutorial-interactions-2.component";
import { TutorialInteractionsComponent } from "../tutorial/tutorial-components/tutorial-interactions/tutorial-interactions.component";
import { TutorialIntroComponent } from "../tutorial/tutorial-components/tutorial-intro/tutorial-intro.component";
import { TutorialPlaceComponent } from "../tutorial/tutorial-components/tutorial-place/tutorial-place.component";
import { TutorialSoundComponent } from "../tutorial/tutorial-components/tutorial-sound/tutorial-sound.component";

export const TutorialSteps: TutorialStep[] = [
  TutorialPlaceComponent,
  TutorialIntroComponent,
  TutorialSoundComponent,
  TutorialInteractionsComponent,
  TutorialInteractions2Component,
  TutorialDownloadComponent,
  TutorialAttentionComponent,
];
