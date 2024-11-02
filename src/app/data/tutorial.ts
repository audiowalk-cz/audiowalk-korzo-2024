import { TutorialStep } from "../tutorial/components/tutorial-container/tutorial-container.component";
import { TutorialAttentionComponent } from "../tutorial/tutorial-components/tutorial-attention/tutorial-attention.component";
import { TutorialDownloadComponent } from "../tutorial/tutorial-components/tutorial-download/tutorial-download.component";
import { TutorialPlaceComponent } from "../tutorial/tutorial-components/tutorial-place/tutorial-place.component";
import { TutorialSoundComponent } from "../tutorial/tutorial-components/tutorial-sound/tutorial-sound.component";

export const TutorialSteps: TutorialStep[] = [
  TutorialPlaceComponent,
  TutorialSoundComponent,
  TutorialDownloadComponent,
  TutorialAttentionComponent,
];
