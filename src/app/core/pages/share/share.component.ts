import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/shared/services/analytics.service";

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"],
})
export class ShareComponent implements OnInit {
  constructor(private analytics: AnalyticsService) {}
  ngOnInit(): void {}

  share() {
    this.analytics.trackEvent("share", {});
    if (navigator.share) {
      navigator.share({
        title: "Studentská revolta ‘89",
        text: "Studentská revolta ‘89 - Audioprůvodce k 17. listopadu 1989",
        url: "https://studentskarevolta89.cz",
      });
    }
  }
}
