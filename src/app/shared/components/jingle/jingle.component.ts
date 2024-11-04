import { Component } from "@angular/core";
import { TrackId } from "src/app/data/tracks";

@Component({
  selector: "app-jingle",
  templateUrl: "./jingle.component.html",
  styleUrl: "./jingle.component.scss",
})
export class JingleComponent {
  jingleTrack = TrackId["jingle"];
}
