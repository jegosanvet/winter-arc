var C="wa-v1";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"])}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(caches.open(C).then(function(c){return c.match(e.request).then(function(r){var f=fetch(e.request).then(function(n){c.put(e.request,n.clone());return n}).catch(function(){return r});return r||f})}))});
