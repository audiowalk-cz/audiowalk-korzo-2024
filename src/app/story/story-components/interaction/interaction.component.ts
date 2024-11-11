import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { PlayerController, StoryController } from "@audiowalk/sdk";
import { ChapterId, StoryState } from "src/app/data/story";
import { TrackId, Tracks } from "src/app/data/tracks";
import { MediaService } from "src/app/shared/services/media.service";
import { ChapterComponent } from "../../components/story-container/story-container.component";

interface InteractionComponentData {
  question: string;
  answerProperty: keyof StoryState;
  options: InteractionComponentDataOption[];
  ambientTrack: TrackId;
}

interface InteractionComponentDataOption {
  label: string;
  track?: TrackId;
  value: string;
}

@Component({
  selector: "app-interaction",
  templateUrl: "./interaction.component.html",
  styleUrl: "./interaction.component.scss",
})
export class InteractionComponent implements ChapterComponent, OnInit, OnDestroy {
  @Input() data!: {
    question: string;
    answerProperty: keyof StoryState;
    options: { label: string; track?: TrackId; value: string; italic?: boolean }[];
    ambientTrack: TrackId;
  };

  @Output() end = new EventEmitter<void>();

  selectedOption: InteractionComponentDataOption | null = null;

  ambientPlayer?: PlayerController;

  answerPlayer?: PlayerController;

  constructor(
    private storyController: StoryController<ChapterId, StoryState>,
    private mediaService: MediaService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.mediaService.playJingle(), 1000);
    this.ambientPlayer = this.mediaService.playAmbient(this.data.ambientTrack);
  }

  ngOnDestroy(): void {
    this.answerPlayer?.destroy();

    this.ambientPlayer?.stop();
  }

  async selectOption(value: string) {
    if (this.selectedOption) return;

    await this.storyController.updateState({
      [this.data.answerProperty]: value,
    });

    const option = this.data.options.find((option) => option.value === value);
    if (!option) return;

    this.selectedOption = option;

    if (option.track) await this.playAnswerTrack(option.track);

    this.end.emit();
  }

  async playAnswerTrack(trackId: TrackId) {
    return new Promise<void>((resolve) => {
      const track = Tracks[trackId];

      this.answerPlayer = new PlayerController(track.id, track.url, {
        autoSave: false,
      });

      this.answerPlayer.onStop.subscribe(() => {
        this.answerPlayer?.destroy();
        this.answerPlayer = undefined;
        resolve();
      });

      this.answerPlayer.play();
    });
  }
}
