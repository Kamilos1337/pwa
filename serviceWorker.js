const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/pwa/",
  "/pwa/index.html",
  "/pwa/css/style.css",
  "/pwa/js/app.js",
  "/pwa/images/coffee1.jpg",
  "/pwa/images/coffee2.jpg",
  "/pwa/images/coffee3.jpg",
  "/pwa/images/coffee4.jpg",
  "/pwa/images/coffee5.jpg",
  "/pwa/images/coffee6.jpg",
  "/pwa/images/coffee7.jpg",
  "/pwa/images/coffee8.jpg",
  "/pwa/images/coffee9.jpg",
    "/pwa/images/k1.jpg",
      "/pwa/images/k2.jpg",
        "/pwa/images/k3.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
