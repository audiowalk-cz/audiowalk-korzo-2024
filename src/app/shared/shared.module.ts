import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShareComponent } from "../core/pages/share/share.component";
import { ChapterPhotoComponent } from "../story/components/chapter-photo/chapter-photo.component";
import { BoxComponent } from "./components/box/box.component";
import { ButtonComponent } from "./components/button/button.component";
import { ContainerComponent } from "./components/container/container.component";
import { HelpButtonComponent } from "./components/help-button/help-button.component";
import { JingleComponent } from "./components/jingle/jingle.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { MediaDownloadComponent } from "./components/media-download-status/media-download-status.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";
import { PlayButtonComponent } from "./components/play-button/play-button.component";
import { PlayerComponent } from "./components/player/player.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { TypeTextComponent } from "./components/type-text/type-text.component";
import { VideoComponent } from "./components/video/video.component";
import { TimePipe } from "./pipes/time.pipe";
import { TypePipe } from "./pipes/type.pipe";

@NgModule({
  declarations: [
    TimePipe,
    TypePipe,

    BoxComponent,
    ButtonComponent,
    ChapterPhotoComponent,
    ContainerComponent,
    LoadingComponent,
    MediaDownloadComponent,
    PageFooterComponent,
    PlayerComponent,
    PlayButtonComponent,
    ProgressBarComponent,
    ShareComponent,
    VideoComponent,
    HelpButtonComponent,
    TypeTextComponent,
    JingleComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TimePipe,
    TypePipe,

    BoxComponent,
    ButtonComponent,
    ChapterPhotoComponent,
    ContainerComponent,
    LoadingComponent,
    MediaDownloadComponent,
    PageFooterComponent,
    PlayerComponent,
    PlayButtonComponent,
    ProgressBarComponent,
    ShareComponent,
    VideoComponent,
    HelpButtonComponent,
    TypeTextComponent,
    JingleComponent,
  ],
})
export class SharedModule {}
