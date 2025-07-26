self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("maquinas-pwa").then((cache) => {
      return cache.addAll(["/", "/index.html", "/css/style.css", "/js/script.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Error al registrar Service Worker:", err));
}
