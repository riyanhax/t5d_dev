"use strict";var precacheConfig=[["/index.html","eb3ca1996cd5acd8bf37e33c54432f03"],["/static/css/main.bac398c0.css","33b28061b5005fd5fb9eea82e7fc02b8"],["/static/js/main.67be74bd.js","afb8425f35979b5efa5c1ea5649478e3"],["/static/media/banner1.67a8622e.png","67a8622e37fa74ae05f7181d166c5832"],["/static/media/bg-wallet.aa8d63eb.png","aa8d63ebc1d659307869cbff3918b267"],["/static/media/change_balance.2e5f604d.png","2e5f604d6785eae9536b1d838daa1228"],["/static/media/club_in_icon.0408d99d.png","0408d99d2aa685b90e9b2118f18c21be"],["/static/media/default_icon.bff1dee9.png","bff1dee902f79e35a9a03b43c724106d"],["/static/media/group1.77db12d2.png","77db12d2ad0fe9f1e906c91072ab6775"],["/static/media/group2.6cf0deea.png","6cf0deea5333b4442874f3a4aeb3148a"],["/static/media/group4.52fc70c2.png","52fc70c261d8bbd840dbf940fdd5cfed"],["/static/media/group5.389abbab.png","389abbab650dcfd549eb8b9f7745ab58"],["/static/media/group6.b89a7dd3.png","b89a7dd3abd781a319a7a959594cd97a"],["/static/media/headplayer.bab2720a.png","bab2720acffda87b048121d6d0b93bcc"],["/static/media/index_bg.241a6434.png","241a643495808582bae5bf84023f2cb0"],["/static/media/logo.bab2720a.png","bab2720acffda87b048121d6d0b93bcc"],["/static/media/mine_bg.41b1b445.png","41b1b445df68c0708d1c4ae9fe38e5ee"],["/static/media/share_page_bg.86a4f2ad.png","86a4f2ad8db5aa71e84a7011d9c3a9cd"],["/static/media/transition_bg.035a10df.png","035a10df0daa0087b00086b6006142af"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});