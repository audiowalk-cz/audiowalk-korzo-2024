import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { initialState, StoryState } from "../data/story";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  state = new BehaviorSubject<StoryState>(initialState);

  constructor(private readonly localStorage: LocalStorageService) {}

  updateState(newState: Partial<StoryState>) {}
}
