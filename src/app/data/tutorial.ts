import { TutorialAttentionComponent } from "../components/tutorial-attention/tutorial-attention.component";
import { TutorialStep } from "../components/tutorial-container/tutorial-container.component";
import { TutorialDownloadComponent } from "../components/tutorial-download/tutorial-download.component";
import { TutorialPlaceComponent } from "../components/tutorial-place/tutorial-place.component";
import { TutorialSoundComponent } from "../components/tutorial-sound/tutorial-sound.component";

export const TutorialSteps: TutorialStep[] = [
  TutorialPlaceComponent,
  TutorialSoundComponent,
  TutorialDownloadComponent,
  TutorialAttentionComponent,
];
