

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.2507a4ee9b50d5fe3d86a7eb0e56889d.js"
);

workbox.clientsClaim();


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
