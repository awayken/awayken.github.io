importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "_next/b03f8c6f-e09e-4056-a484-a934d8621e04/page/_error/index.js",
    "revision": "0b61454e8989e57b10a3a9a2746f4cff"
  },
  {
    "url": "_next/b03f8c6f-e09e-4056-a484-a934d8621e04/page/index.js",
    "revision": "33019e638cbeae3b459a8df934587aeb"
  },
  {
    "url": "_next/db9455b473cb02a4c7b0ba86332ed094/app.js",
    "revision": "db9455b473cb02a4c7b0ba86332ed094"
  },
  {
    "url": "index.html",
    "revision": "54a9cf6ac810ef2fe35afc604117e268"
  },
  {
    "url": "static/styles.css",
    "revision": "95a6eaca8e0ecc6c1e5602b01be527ff"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
