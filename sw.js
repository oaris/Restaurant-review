let CACHE_NAME = "resturant_cash";
let cachedArray = [
    "./",
    "./index.html",
    "./restaurant.html",
    "css/styles.css",
    "data/restaurants.json",
    "js/main.js",
    "js/dbhelper.js",
    "js/restaurant_info.js",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "swRegister.js"
];

//Source https://developers.google.com/web/fundamentals/primers/service-workers/
self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    console.log('opened cache');
    return cache.addAll(cachedArray);
  }));
});


self.addEventListener('activate', function(event) {

  event.waitUntil(caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {

  if (event.request.url.startsWith(self.location.origin)) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response) {
      return response;
    }
    return fetch(event.request);

  }));
}
});
