import { ChapterId } from "./chapters";

export interface StoryState {
  currentChapter: ChapterId;
}

export const initialState: StoryState = {
  currentChapter: ChapterId["co-se-stalo"],
};
