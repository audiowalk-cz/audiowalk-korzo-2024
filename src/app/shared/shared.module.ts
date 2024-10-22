import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BoxComponent } from "./components/box/box.component";
import { PageContentComponent } from "./components/page-content/page-content.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";
import { PageComponent } from "./components/page/page.component";
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
  imports: [CommonModule],
  declarations: [
    TimePipe,
    TypePipe,

    PlayerComponent,
    PageContentComponent,
    PageFooterComponent,
    PageComponent,
    ProgressBarComponent,
    PlayerMenuComponent,
    PlayerMenuItemComponent,
    VideoComponent,

    PlayerButtonComponent,
    PlayerPlayButtonComponent,
    PlayerControlsComponent,
    PlayerProgressComponent,
    BoxComponent,
  ],
  exports: [
    TimePipe,
    TypePipe,

    PlayerComponent,
    PageContentComponent,
    PageFooterComponent,
    PageComponent,
    ProgressBarComponent,
    PlayerMenuComponent,
    PlayerMenuItemComponent,
    VideoComponent,
    BoxComponent,

    PlayerButtonComponent,
    PlayerPlayButtonComponent,
    PlayerControlsComponent,
    PlayerProgressComponent,
  ],
})
export class SharedModule {}
