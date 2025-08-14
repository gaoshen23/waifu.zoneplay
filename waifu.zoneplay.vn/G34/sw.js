self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches.open('game-cache').then(cache => {
            return cache.addAll([
                '/G34/',
                '/G34/index.html',
                '/G34/styles.css',
                '/G34/script.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
