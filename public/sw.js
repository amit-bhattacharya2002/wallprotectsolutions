/*
 * Self-unregistering service worker.
 *
 * A previous version of this site shipped a `serwist` PWA service worker that
 * intercepted every fetch (including `/_next/image?...` URLs) using a
 * NetworkOnly route. The current build no longer registers a service worker,
 * but any browser that visited the old build still has the SW installed and
 * keeps proxying every request through it — which leaves placeholder photos
 * blank in dev whenever the SW response handling glitches.
 *
 * Hosting this no-op file at /sw.js means the browser's update check finds
 * a "new" SW, installs it, and immediately self-destructs:
 *   - unregisters itself
 *   - deletes every cache the previous SW left behind
 *   - reloads any open tabs so they stop being controlled by an SW
 *
 * Once everyone who ever opened the old build has refreshed at least once,
 * this file can be deleted.
 */

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      } catch {
        /* no-op: cache cleanup is best effort */
      }
      try {
        await self.registration.unregister();
      } catch {
        /* no-op */
      }
      try {
        const clients = await self.clients.matchAll({ type: "window" });
        for (const client of clients) {
          client.navigate(client.url);
        }
      } catch {
        /* no-op */
      }
    })(),
  );
});

self.addEventListener("fetch", () => {
  // Intentionally pass through to the network until the activate handler
  // finishes unregistering. Doing nothing here means the browser handles
  // the request normally instead of going through a stale route table.
});
