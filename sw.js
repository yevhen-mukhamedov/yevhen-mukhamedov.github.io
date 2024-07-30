// The name of my cache
// const cacheName = "my-pwa-shell-v1.0";
//The files I'm going to cache
// const filesToCache = [
//   "/",
//   "index.html",
//   "./js/index.js",
//   "./styles/styles.css",
//   '/manifest.json',
//   './assets/icons/icon.png',
// ];

self.addEventListener("install", e => {
  console.log("[ServiceWorker] - Install");
  e.waitUntil((async () => {
    // const cache = await caches.open(cacheName);
    console.log("[ServiceWorker] - Caching app shell");
    // await cache.addAll(filesToCache);
  })());
});

// function strategy1() {
//   return fetch("picnic.jpg");
// }

// function strategy2() {
//   return Response.error();
// }

// const pattern1 = /^\/salamander/;
// const pattern2 = /^\/lizard/;

self.addEventListener("fetch", (event) => {
  console.log(event.request.url)  
});