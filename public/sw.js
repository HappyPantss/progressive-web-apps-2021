const CORE_CACHE = 1
const CORE_CACHE_NAME = `core-v${CORE_CACHE}`
const CORE_ASSETS = ["/manifest.json", "/offline", "/css/all.css"]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
})

self.addEventListener("activate", (event) => {})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open(CORE_CACHE_NAME)
        .then(cache => {
            return cache.match(event.request)
                .then(response => {
                    // response is in cache, return cache response
                    if (response) {
                        return response
                    }
                    return fetch(event.request)
                        .then(response => {
                            cache.put(event.request, response.clone())
                            return response
                        })
                })
                .catch(error => {
                    return caches.open(CORE_CACHE_NAME)
                        .then(cache => cache.match('/offline'))
                })
        })
    )
})