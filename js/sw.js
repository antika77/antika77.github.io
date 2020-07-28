//sw.js 파일
const CACHE_NAME = 'antika77.github.io';

//'install' 이벤트를 리스닝하며, 사이트 자산(assets)을 캐싱
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/js/index.js',
				'/images/icons/icon-72x72.png',
				'/images/icons/icon-96x96.png',
				'/images/icons/icon-128x128.png',
				'/images/icons/icon-144x144.png',
				'/images/icons/icon-152x152.png',
				'/images/icons/icon-196x196.png',
				'/images/icons/icon-384x384.png',
				'/images/icons/icon-512x512.png'
				// 필요한 자산(assets)들을 여기에 넣으세요
			]);
		})
	);
});

//'fetch' 요청을 리스닝하며, 캐시에서 발견될 경우 캐시로부터 파일을 가져옴
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});

/*
self.addEventListener('install', function(event) {
	console.log('[Service Worker] Installing Service Worker ...', event);

	event.waitUntil (
		caches.open('static').then(function(cache) {
			cache.addAll(['/', '/index.html', '/manifest.json']);
		})
	);
});

self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker ....', event);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			} else {
				return fetch(event.request).then(function(res) {
					return caches.open('dynamic').then(function(cache) {
						cache.put(event.request.url, res.clone());
						return res;
					});
				});
			}
		})
	);
});
*/
