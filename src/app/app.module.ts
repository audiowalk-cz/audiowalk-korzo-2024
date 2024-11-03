import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoryController } from "@audiowalk/sdk";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppErrorHandler } from "./app.error-handler";
import { story } from "./data/chapters";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: StoryController,
      useFactory: () => new StoryController(story, { stateStorageKey: "story-main" }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
