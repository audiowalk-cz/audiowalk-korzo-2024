import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { QRCodeModule } from "angularx-qrcode";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppErrorHandler } from "./app.error-handler";
import { BoxComponent } from "./components/box/box.component";
import { ButtonComponent } from "./components/button/button.component";
import { ChapterInfoComponent } from "./components/chapter-info/chapter-info.component";
import { ChapterPhotoComponent } from "./components/chapter-photo/chapter-photo.component";
import { ContainerComponent } from "./components/container/container.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { MediaDownloadComponent } from "./components/media-download/media-download.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";
import { PlayerButtonComponent } from "./components/player-button/player-button.component";
import { PlayerControlsComponent } from "./components/player-controls/player-controls.component";
import { PlayerMenuItemComponent } from "./components/player-menu-item/player-menu-item.component";
import { PlayerMenuComponent } from "./components/player-menu/player-menu.component";
import { PlayerPlayButtonComponent } from "./components/player-play-button/player-play-button.component";
import { PlayerProgressComponent } from "./components/player-progress/player-progress.component";
import { PlayerComponent } from "./components/player/player.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { StoryContainerComponent } from "./components/story-container/story-container.component";
import { TutorialAttentionComponent } from "./components/tutorial-attention/tutorial-attention.component";
import { TutorialContainerComponent } from "./components/tutorial-container/tutorial-container.component";
import { TutorialDownloadComponent } from "./components/tutorial-download/tutorial-download.component";
import { TutorialPlaceComponent } from "./components/tutorial-place/tutorial-place.component";
import { TutorialSoundComponent } from "./components/tutorial-sound/tutorial-sound.component";
import { VideoComponent } from "./components/video/video.component";
import { AuthorsComponent } from "./pages/authors/authors.component";
import { ChaptersComponent } from "./pages/chapters/chapters.component";
import { EndComponent } from "./pages/end/end.component";
import { IntroComponent } from "./pages/intro/intro.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { LegalComponent } from "./pages/legal/legal.component";
import { PreloadPageComponent } from "./pages/preload-page/preload-page.component";
import { ShareComponent } from "./pages/share/share.component";
import { TutorialPageComponent } from "./pages/tutorial-page/tutorial-page.component";
import { WalkComponent } from "./pages/walk/walk.component";
import { TimePipe } from "./pipes/time.pipe";
import { TypePipe } from "./pipes/type.pipe";
import { ContainerBodyComponent } from "./components/container-body/container-body.component";
import { ContainerFooterComponent } from "./components/container-footer/container-footer.component";  

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    TypePipe,

    ContainerBodyComponent,
    ContainerFooterComponent,
    BoxComponent,
    ButtonComponent,
    ChapterInfoComponent,
    ChapterPhotoComponent,
    ContainerComponent,
    PageFooterComponent,
    PlayerButtonComponent,
    PlayerComponent,
    PlayerControlsComponent,
    PlayerMenuComponent,
    PlayerMenuItemComponent,
    PlayerPlayButtonComponent,
    PlayerProgressComponent,
    ProgressBarComponent,
    StoryContainerComponent,
    TutorialAttentionComponent,
    TutorialContainerComponent,
    TutorialDownloadComponent,
    TutorialPlaceComponent,
    TutorialSoundComponent,
    VideoComponent,

    AuthorsComponent,
    ChaptersComponent,
    EndComponent,
    IntroComponent,
    LegalComponent,
    LoadingComponent,
    ShareComponent,
    TutorialPageComponent,
    WalkComponent,
    LandingPageComponent,
    MediaDownloadComponent,
    PreloadPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, QRCodeModule],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
