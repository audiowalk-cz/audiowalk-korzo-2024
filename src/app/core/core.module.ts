import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QRCodeModule } from "angularx-qrcode";
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { EndComponent } from "./pages/end/end.component";
import { IntroComponent } from "./pages/intro/intro.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PreloadPageComponent } from "./pages/preload-page/preload-page.component";
import { SourcesComponent } from "./pages/sources/sources.component";

@NgModule({
  declarations: [LandingPageComponent, IntroComponent, PreloadPageComponent, EndComponent, SourcesComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule, QRCodeModule],
})
export class CoreModule {}
