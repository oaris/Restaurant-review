

//Source https://developers.google.com/web/fundamentals/primers/service-workers/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration work ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed ', err);
    });
  });
}
