/* ═══════════════════════════════════════════
   LAD POCKET PRO SIEMENS V3 — Service Worker
   Estratégia: Cache First + Network Fallback
   ═══════════════════════════════════════════ */

const CACHE_NAME = 'lad-pocket-v3-20260705';
const RUNTIME_CACHE = 'lad-pocket-runtime-v3';

// Recursos para pré-cache na instalação
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.jsdelivr.net/npm/dexie@4/dist/dexie.min.js',
];

// ── Install: Pré-cache dos recursos essenciais ──
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker v3...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pré-cacheando recursos...');
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[SW] Falha no pré-cache de alguns recursos:', err);
      });
    }).then(() => {
      console.log('[SW] Instalação concluída, ativando skipWaiting...');
      return self.skipWaiting();
    })
  );
});

// ── Activate: Limpeza de caches antigos ──
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando Service Worker v3...');
  const validCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => !validCaches.includes(name))
          .map((name) => {
            console.log('[SW] Removendo cache antigo:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('[SW] Claiming clients...');
      return self.clients.claim();
    })
  );
});

// ── Fetch: Estratégia Cache First (com fallback para rede) ──
self.addEventListener('fetch', (event) => {
  // Ignorar requisições que não sejam GET
  if (event.request.method !== 'GET') return;

  // Ignorar requisições para APIs externas de analytics, chrome-extension, etc.
  const url = new URL(event.request.url);
  if (
    url.origin !== self.location.origin &&
    !url.href.includes('cdn.jsdelivr.net')
  ) {
    return; // Deixa o navegador lidar com APIs externas normalmente
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Cache hit → retorna do cache
      if (cachedResponse) {
        // Atualiza o cache em background (stale-while-revalidate)
        fetchAndCache(event.request, RUNTIME_CACHE);
        return cachedResponse;
      }

      // Cache miss → busca na rede e armazena
      return fetch(event.request)
        .then((networkResponse) => {
          // Só cacheia respostas válidas
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== 'basic'
          ) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // Offline e sem cache → retorna página offline
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          // Para outros recursos, retorna erro
          return new Response('Recurso indisponível offline', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        });
    })
  );
});

// ── Helper: Fetch em background para atualizar cache ──
function fetchAndCache(request, cacheName) {
  fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        caches.open(cacheName).then((cache) => {
          cache.put(request, networkResponse.clone());
        });
      }
    })
    .catch(() => {
      // Silencioso — falha na atualização de background é aceitável
    });
}

// ── Push Notification (opcional — preparado para futuro) ──
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Nova atualização disponível no LAD Pocket Pro',
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' },
  };
  event.waitUntil(
    self.registration.showNotification(
      data.title || 'LAD Pocket Pro Siemens',
      options
    )
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      const url = event.notification.data?.url || '/';
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

console.log('[SW] LAD Pocket Pro Siemens V3 Service Worker carregado ✅');
