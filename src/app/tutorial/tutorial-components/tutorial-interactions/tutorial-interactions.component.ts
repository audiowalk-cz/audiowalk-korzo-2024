import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PlayerController } from "@audiowalk/sdk";
import { Tracks } from "src/app/data/tracks";
import { TutorialStepComponent } from "../../components/tutorial-container/tutorial-container.component";

@Component({
  selector: "app-tutorial-interactions",
  templateUrl: "./tutorial-interactions.component.html",
  styleUrl: "./tutorial-interactions.component.scss",
})
export class TutorialInteractionsComponent implements TutorialStepComponent, OnInit {
  @Output() next = new EventEmitter<void>();

  private readonly jingleSound = new PlayerController("jingle", Tracks["jingle"].url);

  ngOnInit(): void {}

  playJingle() {
    this.jingleSound.play();
  }
}
