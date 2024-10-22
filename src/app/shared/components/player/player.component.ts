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
import { Track } from "src/app/story/schema/track";
import { PlayerMenuComponent } from "../player-menu/player-menu.component";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() track!: Track;
  @Input() startProgress?: number;
  @Input() autoPlay: boolean = false;
  @Input() mode: "light" | "dark" = "dark";

  @Output("progress") onProgress = new EventEmitter<number>();
  @Output("nextChapter") nextChapter = new EventEmitter<void>();

  error?: string;
  offline: boolean = !navigator.onLine;

  showMenu = false;

  @ViewChild("audioPlayer") audioEl!: ElementRef<HTMLAudioElement>;

  public player?: PlayerController;

  @ContentChild(PlayerMenuComponent) menu?: PlayerMenuComponent;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["track"]) {
      if (this.track && this.player) this.loadTrack(this.track);
    }
  }

  ngAfterViewInit(): void {
    this.player = new PlayerController(this.audioEl.nativeElement, {});

    if (this.track) this.loadTrack(this.track);
  }

  ngOnDestroy(): void {
    this.player?.close();
  }

  async loadTrack(track: Track) {
    this.player?.open(this.track.url, {
      title: this.track.title ?? "Track",
      album: "Studentská revolta '89",
      artwork: [
        {
          src: "https://studentskarevolta89.cz/assets/img/media-bg.jpg",
          sizes: "512x512",
          type: "image/jpeg",
        },
      ],
    });
  }

  async playPause() {
    if (!this.player) return;

    if (this.player?.status.value === "paused") {
      this.play();
    } else {
      this.pause();
    }
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
