const CACHE_NAME = 'trigo-v17';
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll([
            './',
            './index.html',
            './manifest.json'
        ]))
        .then(() => self.skipWaiting())
    );
});
self.addEventListener('activate', e => {
    e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
