import { BasicStoryState } from "@audiowalk/sdk";
import { Chapter, Story } from "../story/components/story-container/story-container.component";
import { IntroComponent } from "../story/story-components/intro/intro.component";
import { TrackId } from "./tracks";

export enum ChapterId {
  "intro" = "intro",
}

export interface StoryState extends BasicStoryState<ChapterId> {
  interakce_1?: "a" | "b" | "c";
}

export interface ChapterMetadata {
  title: string;
}

export const story: Story<ChapterId, StoryState, ChapterMetadata> = {
  initialState: {
    currentChapter: ChapterId.intro,
  },
  chapters: {
    [ChapterId.intro]: new Chapter(ChapterId.intro, {
      component: IntroComponent,
      data: {
        track: TrackId.intro_1_1,
      },
      metadata: {
        title: "Úvod",
      },
      nextChapter: ChapterId.intro,
    }),
  },
};
