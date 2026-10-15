const CACHE_NAME = 'herbario-v1';
const APP_SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icons/leaf.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .filter((cacheName) => cacheName.startsWith('herbario-'))
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
      self.clients.claim(),
    ]),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    (async () => {
      const isNavigation = event.request.mode === 'navigate';
      const cachedResponse = await caches.match(event.request);

      if (cachedResponse && !isNavigation) {
        return cachedResponse;
      }

      try {
        const response = await fetch(event.request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        if (isNavigation) {
          const offlinePage = await caches.match('/index.html');
          if (offlinePage) {
            return offlinePage;
          }
        }
        throw error;
      }
    })(),
  );
});
