import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MediaControlsController, StoryController } from "@audiowalk/sdk";
import { config } from "src/config";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppErrorHandler } from "./app.error-handler";
import { story } from "./data/story";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: config.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: StoryController,
      useFactory: () => new StoryController(story, { stateStorageKey: "story-main" }),
    },
    {
      provide: MediaControlsController,
      useFactory: () => new MediaControlsController(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
