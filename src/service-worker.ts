declare let sw: ServiceWorkerGlobalScope;

sw = self as any;

sw.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

sw.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

sw.addEventListener("fetch", (event) => {
  console.log("Service worker fetch", event.request.url);
});

async function fetchLatestVersion() {
  const response = await fetch("audiowalk.json");
  const data = await response.json();

  await caches.open(`audiowalk-${data.version}`);

  const cacheList = (await caches.keys()).sort();

  while (cacheList.length > 1) {
    const cacheName = cacheList.shift();
    console.log("Deleting cache", cacheName);
    await caches.delete(cacheName!);
  }

  console.log("Latest version", data.version);
}

sw.addEventListener("message", (event) => {
  console.log("Service worker message", event.data);
  event.waitUntil(fetchLatestVersion());
});
