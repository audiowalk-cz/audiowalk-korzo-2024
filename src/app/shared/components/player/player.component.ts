import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { MediaControlsController, PlayerController, PlayerStatus } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { TrackId } from "src/app/data/tracks";
import { MediaService, Track } from "../../services/media.service";

@UntilDestroy()
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input("track") trackId!: TrackId;

  @Input() status: PlayerStatus = PlayerStatus.paused;

  @Input() autoPlay: boolean = false;
  @Input() loop: boolean = false;
  @Input() autoSave: boolean = false;
  @Input() hideUI: boolean = false;
  @Input() crossfade: boolean = false;
  @Input() fadeIn: boolean = false;
  @Input() fadeOut: boolean = false;
  @Input() mediaControls: boolean = false;

  @Input() startAt?: number;
  @Input() fadeInterval: number = 2000;

  @Output("progress") onProgress = new EventEmitter<number>();
  @Output("stop") onStop = new EventEmitter<void>();

  track?: Track;

  error?: string;
  offline: boolean = !navigator.onLine;

  public player?: PlayerController;

  constructor(
    private mediaService: MediaService,
    private mediaControlsController: MediaControlsController,
  ) {}

  ngOnInit(): void {
    console.log(this.trackId);
    console.log(this.autoPlay);
    if (this.trackId) this.loadTrack(this.trackId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["track"]) {
      if (this.trackId) this.loadTrack(this.trackId);
    }

    if (changes["status"]) {
      if (this.player) {
        if (this.status === PlayerStatus.playing) this.play();
        if (this.status === PlayerStatus.paused) this.pause();
      }
    }
  }

  ngOnDestroy(): void {
    this.player?.destroy();
  }

  async loadTrack(trackId: TrackId) {
    this.player?.destroy(); // do not wait to enable crossfading

    this.track = await this.mediaService.getTrack(trackId);

    this.player = new PlayerController(this.track.id, this.track.url, {
      autoSave: this.autoSave,
      loop: this.loop,
      crossfade: this.crossfade,
      crossfadeTime: this.fadeInterval,
    });

    if (this.mediaControlsController) {
      this.mediaControlsController.attachPlayer(this.player);
    }

    this.player.onStop.pipe(untilDestroyed(this)).subscribe(() => this.onStop.emit());

    if (this.autoPlay) this.play();
  }

  async play() {
    if (!this.player) return;

    this.player.play();
  }

  pause() {
    if (!this.player) return;
    this.player?.pause();
  }

  restart() {
    this.player?.seekTo(0);
    this.play();
  }

  rewind() {
    this.player?.seekTo(Math.max(0, this.player.currentTime.value - 10));
  }

  forward() {
    this.player?.seekTo((this.player.totalTime.value || 10) - 10);
  }
}
