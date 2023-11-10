'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "cc8f4c1c6fb9f8358d4e8a0985347886",
"version.json": "2794ef66024dc9fa7002d5e72c609a9e",
"assets/assets/estatus/enviadomensaje_leido.png": "1a7ea80a522c34ca69397a03ec3e6cdd",
"assets/assets/estatus/canceladomensaje_leido.png": "86740da15d0202ebe95f2e663872163a",
"assets/assets/estatus/enprocesomensaje_leido.png": "29f566a2ff459585206d25052543f32d",
"assets/assets/estatus/conformemensaje_leido.png": "1578f48b46a9667da5751ae149fb01fe",
"assets/assets/estatus/finalizadoconexitomensaje_leido.png": "d06d6ce14b62ff78a0203e3c4d31c6ae",
"assets/assets/estatus/leidomensaje_leido.png": "d863767fd0b399fbe79cc635a8248d11",
"assets/assets/estatus/noconformemensaje_leido.png": "a154ed7d2f723b993218511133ab9e7a",
"assets/assets/estatus/recibidomensaje_leido.png": "b360de0987d74b8101d6461551617d88",
"assets/assets/estatus/conformemensaje_noleido.png": "9aa96bb07c7c20bbf11840aad227b813",
"assets/assets/estatus/finalizadoconexitomensaje_noleido.png": "75fc94a909e2dc16590f6825e43f1b5e",
"assets/assets/estatus/enviadomensaje_noleido.png": "e85b3e12c997058dded846005764d065",
"assets/assets/estatus/enprocesomensaje_noleido.png": "65be5c74511ada990bd4e9e7e7614334",
"assets/assets/estatus/canceladomensaje_noleido.png": "c704538bfbd23474c30d4671ab7fd3ce",
"assets/assets/estatus/noconformemensaje_noleido.png": "27f17d7fa664fba56b5acc7b17532e5f",
"assets/assets/estatus/recibidomensaje_noleido.png": "e9f613f2d861edbd184bdfa011950cd6",
"assets/assets/estatus/leidomensaje_noleido.png": "ec09095842257c4657206de384dd7c0a",
"assets/assets/estatus/minenviadomensaje_leido.png": "4221a84482a1e4b3d409ab1e696f6282",
"assets/assets/servicios/pilotaje.png": "f6e1977158380beaf99709741da4641b",
"assets/assets/servicios/remolcadores.png": "c8b57635fb425f2f2e9f3245da220a94",
"assets/assets/servicios/capitanias.png": "2e57e9d58ef624aa51851fa901d6b4f9",
"assets/assets/servicios/lanchaje.png": "7552e5811918ed464b3faff3e4071d2a",
"assets/assets/servicios/cenave.png": "fdac4ba7f46fde1880f503eb0b66a362",
"assets/assets/servicios/remolcadores_st.png": "44bdcf2ded847f75959d42b42406208c",
"assets/assets/servicios/pilotaje_st.png": "1fddd00c04ff40a423dbe524d7ae1206",
"assets/assets/servicios/lanchaje_st.png": "9a38d8a8d17913fc2192075e88fb5efa",
"assets/assets/servicios/cenave_st.png": "381d3459ec14658c85c783a751ca84ea",
"assets/assets/servicios/capitanias_st.png": "92b71242bb02712de085d4c77dc9d6de",
"assets/assets/tramites/gente.png": "922eaa46291caa0704943c2e92b91552",
"assets/assets/tramites/empresas.png": "bacb0262fefde811fe6d07624dd38131",
"assets/assets/tramites/renave.png": "4cbf7e2c3b3293c54e993f8bda9ee9fb",
"assets/assets/tramites/certificacion.png": "4ac93bfa18388af51fab66219f376b3e",
"assets/assets/tramites/industria.png": "cb942da86c510e6c441d707e4dbad8da",
"assets/assets/tramites/puertos.png": "d11abe9c628253c3a58b9aad79609531",
"assets/assets/tramites/seguridad.png": "9c3b84715cffa8acd05a16e99611ed16",
"assets/assets/tramites/seguridad_st.png": "c732683eba103416983b14f68994e9cb",
"assets/assets/tramites/renave_st.png": "8f897c8fbae8ef91670e478a7337c584",
"assets/assets/tramites/puertos_st.png": "d2d2a4e00fd579b624268dae0bf71d06",
"assets/assets/tramites/industria_st.png": "477807a3775360b925a07b803007b817",
"assets/assets/tramites/gente_st.png": "9c101b899f96dba00079fca42a18b048",
"assets/assets/tramites/empresas_st.png": "f85795a8bed22133e275466ccfbff10e",
"assets/assets/tramites/certificacion_st.png": "92a67689c8b80d5ab3ab3c160c895fed",
"assets/assets/group/individual.png": "393ed215f56445bebe9a0496f69e96b9",
"assets/assets/group/sobre.png": "a2d8c80f06b84cdc72e85c788a2195ce",
"assets/assets/group/load_1.png": "7e6cf919f16c60a1e37115755be8b9df",
"assets/assets/group/load_2.png": "3ff66ddbfa0eed67c5087704e0d4a447",
"assets/assets/group/load_3.png": "232a619906bfaffe44dc0d494e9e739c",
"assets/assets/group/load_4.png": "2b65d359936f67fd1b265c70e24d4b4f",
"assets/assets/group/logo_inea.png": "a84a34bad42fc0947f12cf26313af4b2",
"assets/assets/group/logo_app.png": "cecaf5450093fc228829f320d49d11c4",
"assets/assets/group/notificacion.png": "930326978962efef7216c553d8491449",
"assets/assets/group/inea.png": "5237d70c9217778ac35d98be4822054d",
"assets/assets/group/felicitaciones.png": "584d554034a5e3f8788e7213e753331b",
"assets/assets/group/boton_manual.png": "0864b97e210a522e9335a238742374a7",
"assets/assets/group/trash.png": "033d2ed37840fcea9b5e3fff18bac9d3",
"assets/assets/group/sar.png": "f0c51d3939699a07726fdd7541ef383b",
"assets/assets/group/sars.gif": "04f1d3ed3e927ce92ba3da91ae556415",
"assets/assets/group/sar.gif": "d13919f5333d8bdebdaec4419a5336fc",
"assets/assets/group/wallpaper.png": "cad44fcd5957ed8c138bb31769d1be8e",
"assets/assets/group/marina.png": "3a5dc27edf5e635ec8c5228a9afeef60",
"assets/assets/group/xfondo_app.png": "9b24d00b12f3d647075a4051ee554154",
"assets/assets/group/fondo_app.png": "ff119385cfebade6d478ee015fcf600e",
"assets/assets/group/comprometidosx.png": "8ec188ae30e1249ed02c76d1133357e8",
"assets/assets/group/comprometidos.png": "50608df7417e4f4bb324a97cc7e0aee4",
"assets/assets/group/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/group/wallpaper_2.png": "c40ab1394a34638f2ebf34916a7b2909",
"assets/assets/group/wallpaper_3.png": "37587931814dfa9860dd9c8f9e4a68d4",
"assets/assets/group/denuncias.png": "72b22ec704930fbd3ff7ad5d9777172e",
"assets/assets/group/denuncias_nota.png": "33f4aa552fb9dff0d70affdc55b7f192",
"assets/assets/group/fondo_baselegal.png": "eb92bb80574f38ac7a39a447ae397718",
"assets/assets/group/papel_tapiz.png": "a668bfb2a1af134d4ae0cecf7d068f47",
"assets/assets/group/papel_marina.png": "241067eedc64797fa075eea738645768",
"assets/assets/group/marina_circulo.png": "bcd3a742751eb2bc1d03ca311a153bda",
"assets/assets/group/titulo_chatbot.png": "59dbe5b9d28aeafa317c8ace86f78833",
"assets/assets/group/te_escucha_chatbot.png": "d51ceb394798906fb00e0eed6bef4617",
"assets/assets/group/bottom_chatbot.png": "0c8618e6ed3d7519c39084ceccd3ad6c",
"assets/assets/group/marina_circulo_st.png": "5c4930835e410126f5e46a60d85c1f1e",
"assets/assets/group/marina_avatar.png": "b4d3ef604f5d689d6c191389524777ed",
"assets/assets/group/posicion.png": "b247abaaceab536db6f21f792bcc760a",
"assets/assets/group/posicion_baja.png": "a8fce510f59c1dbe8806fc2883c3bfb6",
"assets/assets/group/sar_st.png": "559ceea0ffcfa1a5a14d05e4ff11c439",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/fonts/MaterialIcons-Regular.otf": "4ea3ec5ff42a992c438648ac134fee8e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "417ca6dfde85182cdfd65b9d5f4290aa",
"assets/AssetManifest.bin": "67ad9d4d6dfac717cb05577b2ae50f19",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "4b452a98335294f96089954497ff3e1a",
"icons/Icon-maskable-192.png": "69ac8a81c7ea3ac21df8624bc0bc9127",
"icons/Icon-maskable-512.png": "a1e654378f3c510859eb13151cafbff5",
"icons/Icon-192.png": "01cf0dd01c3113f3f3d3561b055d1d69",
"icons/Icon-512.png": "25a00e83d464e053481c597cdf3442f7",
"manifest.json": "2aec7fd9b52955d24dafac5cf263ba9e",
"favicon.png": "9d7a60873da23f2e17ea8c62b5751e1c",
"index.html": "bfb0c69d52a567b47e0ac676fecc6735",
"/": "bfb0c69d52a567b47e0ac676fecc6735"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
