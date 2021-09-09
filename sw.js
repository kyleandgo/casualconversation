const staticProductList = "product-list";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/products_1.png",
    "/images/products_2.png",
    "/images/products_3.png",
    "/images/products_4.png",
    "/images/products_5.png",
    "/images/products_6.png",
];



self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticProductList).then(cache => {
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