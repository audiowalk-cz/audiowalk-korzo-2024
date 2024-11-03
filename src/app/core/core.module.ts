import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QRCodeModule } from "angularx-qrcode";
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { IntroComponent } from "./pages/intro/intro.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PreloadPageComponent } from "./pages/preload-page/preload-page.component";

@NgModule({
  declarations: [LandingPageComponent, IntroComponent, PreloadPageComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule, QRCodeModule],
})
export class CoreModule {}
