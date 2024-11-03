import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
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
import { TrackId } from "src/app/data/tracks";
import { MediaService, Track } from "../../services/media.service";
import { PlayerMenuComponent } from "../player-menu/player-menu.component";

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

  @Input() title?: string;
  @Input() artwork?: MediaImage[];

  @Output("progress") onProgress = new EventEmitter<number>();
  @Output("next") nextChapter = new EventEmitter<void>();

  track?: Track;

  error?: string;
  offline: boolean = !navigator.onLine;

  showMenu = false;

  @ViewChild("audioEl") audioEl!: ElementRef<HTMLAudioElement>;

  public player?: PlayerController;

  @ContentChild(PlayerMenuComponent) menu?: PlayerMenuComponent;

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
      autoSave: false,
    });

    if (this.trackId) this.loadTrack(this.trackId);

    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.player?.close();
  }

  async loadTrack(trackId: TrackId) {
    // this.track = await this.mediaService.getTrack(trackId)

    this.track = {
      id: trackId,
      title: "Track title",
      url: "assets/audio/spejbl-1.mp3",
      mimeType: "audio/mpeg",
      type: "audio",
    };

    await this.player?.open(this.track.url);

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
