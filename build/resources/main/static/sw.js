self.addEventListener('install', function (event) {
    console.info('SW installed woo ', new Date().toLocaleTimeString());
});

self.addEventListener('activate', function (event) {
    console.info('SW activated woo ', new Date().toLocaleTimeString());
});

self.addEventListener('fetch', function (event) {
    if (!navigator.onLine) {
        event.respondWith(new Response('uh oh, you\'re offline'));
    } else {
        event.respondWith(fetch(event.request));
    }
});