// //set this to true for production
// var doCache = false;

// //Name our cache
// const CACHE_NAME = "my-pwa-cache-v3";

// //Delete old caches that are not our  current one!
// self.addEventListener("activate", event => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then(keyList =>
//       Promise.all(
//         keyList.map(key => {
//           if (!cacheWhitelist.includes(key)) {
//             console.log("Delete cache: " + key);
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   );
// });



// //the first time the user starts up the PWA, 'install is triggered.
// self.addEventListener('install', function(event){
//   if(doCache){
//     event.waitUntil(
//       caches.open(CACHE_NAME).then(function(cache){
//         //Get the assets manifest so we can see what our js file is named
//         //This is because webpack hashes it 
//         fetch("asset-manifest.json")
//         .then(response =>{
//           response.json
//         })
//         .then(assets => {
//           //open a cache and cache our files 
//           //we want to cache the page and the main.js generated by webpack
//           //We could also cache any static assest like CSS or image like this:
//           const urlsToCache =[
//             "/", assets["app.js"],
//             "/index.html",
//             "/src/App.css",
//             "/src/index.css",
//             "/src/images/paris.jpg",
//           ]
//           cache.addAll(urlsToCache);
//           console.log("cashed");
//         })
//       })
//     )
//   }
// });

// // When the webpage goes to fetch files, we intercept that request and serve up the matching files
// // if we have them

// self.addEventListener("fetch", function(event){
//   if(doCahce){
//     event.respondWith(
//       caches.match(event.request).then(function(reponse){
//         return response || fetch(event.request);
//       })
//     )
//   }
// });



// self.addEventListener('push', function(e){
//   if (e.data){
//     body = e.data.text();
//   } else {
//     body= 'Push message no payload';
//   }

//   var options = {
//     body: body,
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: 1
//     },
//     actions: [
//       {
//         action: 'explore', title: 'Explore this new world',
//       },
//       {
//         action: 'close', title: 'I don t want any of this',
//       },
//     ]
//   };
//   e.waitUntil(
//     self.registration.showNotification('Push Notification', options)
//   );
// })
