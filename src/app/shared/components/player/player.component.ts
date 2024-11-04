import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { PlayerController } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { TrackId } from "src/app/data/tracks";
import { MediaService, Track } from "../../services/media.service";

@UntilDestroy()
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input("track") trackId!: TrackId;
  @Input() startProgress?: number;
  @Input() autoPlay: boolean = false;
  @Input() mode: "light" | "dark" = "dark";
  @Input() showUI: boolean = true;
  @Input() autoSave: boolean = false;

  @Input() title?: string;
  @Input() artwork?: MediaImage[];

  @Output("progress") onProgress = new EventEmitter<number>();
  @Output("stop") onStop = new EventEmitter<void>();

  track?: Track;

  error?: string;
  offline: boolean = !navigator.onLine;

  @ViewChild("audioEl") audioEl!: ElementRef<HTMLAudioElement>;

  public player?: PlayerController;

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaService: MediaService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["track"]) {
      if (this.trackId && this.player) this.loadTrack(this.trackId);
    }
  }

  ngAfterViewInit(): void {
    this.player = new PlayerController(this.audioEl.nativeElement, {
      playOnInit: this.autoPlay,
      autoSave: this.autoSave,
    });

    this.player.onStop.pipe(untilDestroyed(this)).subscribe(() => this.onStop.emit());

    if (this.trackId) this.loadTrack(this.trackId);

    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.player?.close();
  }

  async loadTrack(trackId: TrackId) {
    this.track = await this.mediaService.getTrack(trackId);

    await this.player?.open(this.track.id, this.track.url);

    this.player?.setMetadata({
      title: this.track.title,
      album: this.title,
      artwork: this.artwork,
    });
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
}
