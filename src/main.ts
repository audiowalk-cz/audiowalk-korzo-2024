import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

(async () => {
  if ("serviceWorker" in navigator) {
    console.log("Registering service worker");
    const registration = await navigator.serviceWorker.register("/service-worker.js", {
      scope: "/",
    });

    registration.active!.postMessage("Hello from main");
  }

  try {
    console.log("Bootstrapping module");
    await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    console.error(err);
  }
})();
