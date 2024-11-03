import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShareComponent } from "../core/pages/share/share.component";
import { ChapterPhotoComponent } from "../story/components/chapter-photo/chapter-photo.component";
import { BoxComponent } from "./components/box/box.component";
import { ButtonComponent } from "./components/button/button.component";
import { ContainerComponent } from "./components/container/container.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { MediaDownloadComponent } from "./components/media-download-status/media-download-status.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";
import { PlayerButtonComponent } from "./components/player-button/player-button.component";
import { PlayerControlsComponent } from "./components/player-controls/player-controls.component";
import { PlayerMenuItemComponent } from "./components/player-menu-item/player-menu-item.component";
import { PlayerMenuComponent } from "./components/player-menu/player-menu.component";
import { PlayerPlayButtonComponent } from "./components/player-play-button/player-play-button.component";
import { PlayerProgressComponent } from "./components/player-progress/player-progress.component";
import { PlayerComponent } from "./components/player/player.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
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
    PlayerButtonComponent,
    PlayerComponent,
    PlayerControlsComponent,
    PlayerMenuComponent,
    PlayerMenuItemComponent,
    PlayerPlayButtonComponent,
    PlayerProgressComponent,
    ProgressBarComponent,
    ShareComponent,
    VideoComponent,
  ],
  imports: [CommonModule],
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
    PlayerButtonComponent,
    PlayerComponent,
    PlayerControlsComponent,
    PlayerMenuComponent,
    PlayerMenuItemComponent,
    PlayerPlayButtonComponent,
    PlayerProgressComponent,
    ProgressBarComponent,
    ShareComponent,
    VideoComponent,
  ],
})
export class SharedModule {}
