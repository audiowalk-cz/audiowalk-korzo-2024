import { ChapterDefinition, StoryDefinition } from "../story/components/story-container/story-container.component";
import { BasicWalkComponent } from "../story/story-components/basic-walk/basic-walk.component";
import { TrackId } from "./tracks";

// common things to export to StoryController

// app specific things
export enum ChapterId {
  "kapitola-1" = "kapitola-1",
}

export interface ChapterData {
  directions: string;
  durationMinutes: number;
  title: string;
  description: string;
  track?: TrackId;
  pathIndex: number;
}

export type Chapter = ChapterDefinition<ChapterId, ChapterData>;

export const Chapters: StoryDefinition<ChapterId, ChapterData> = {
  "kapitola-1": {
    id: ChapterId["kapitola-1"],
    nextChapter: null,
    data: {
      component: BasicWalkComponent,
      title: "Kapitola 1",
      directions: "Jdeme na náměstí",
      durationMinutes: 14,
      description: "",
      pathIndex: 0,
      track: TrackId["track-1"],
    },
  },
};
