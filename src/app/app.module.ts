import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppErrorHandler } from "./app.error-handler";

const routes: Routes = [
  { path: "", loadChildren: () => import("./intro/intro.module").then((m) => m.IntroModule) },
  { path: "story", loadChildren: () => import("./story/story.module").then((m) => m.StoryModule) },
  { path: "outro", loadChildren: () => import("./outro/outro.module").then((m) => m.OutroModule) },
  { path: "info", loadChildren: () => import("./info/info.module").then((m) => m.InfoModule) },

  { path: "**", redirectTo: "" },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
