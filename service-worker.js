/**
 * Created by don on 1/2/18.
 */
var cacheName = 'lou-xiao-er';
var filesToCache = [
    '/index.html',
    '/createQRCode.html'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});