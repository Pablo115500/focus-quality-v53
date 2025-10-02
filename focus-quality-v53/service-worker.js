const CACHE_NAME = 'focus-v5.3';
const URLS = ['index.html','style.css','app.js','manifest.json'];
self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE_NAME).then(c => c.addAll(URLS))
));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});