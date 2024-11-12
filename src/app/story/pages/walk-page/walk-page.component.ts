import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MediaControlsController, StoryController } from "@audiowalk/sdk";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ChapterId, ChapterMetadata, story, StoryState } from "src/app/data/story";
import { Chapter } from "../../components/story-container/story-container.component";

@UntilDestroy()
@Component({
  selector: "app-walk-page",
  templateUrl: "./walk-page.component.html",
  styleUrls: ["./walk-page.component.scss"],
})
export class WalkPageComponent {
  story = story;

  image?: string;

  constructor(
    private readonly storyController: StoryController<
      ChapterId,
      StoryState,
      Chapter<ChapterId, any, StoryState, ChapterMetadata>
    >,
    private readonly mediaControls: MediaControlsController,
    private readonly router: Router,
  ) {
    this.storyController.currentChapter.pipe(untilDestroyed(this)).subscribe((chapter) => {
      if (chapter?.metadata.image) this.image = chapter.metadata.image;

      this.mediaControls.setMetadata({
        title: chapter?.metadata.title || "Audiowalk",
        album: "Sejdeme se u Koníčka?",
        artwork: this.image ? [{ src: this.image }] : undefined,
      });
    });
  }

  async endStory() {
    await this.router.navigate(["/end"]);
    this.storyController.resetStory();
  }
}
