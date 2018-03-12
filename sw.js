importScripts('workbox-sw.prod.v2.1.3.js');

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
    "url": "_next/58cf54ed-3af5-4bd9-b1ad-28fb984f4606/page/_error.js",
    "revision": "565db93e89ce5593e42e2a2cc8c42081"
  },
  {
    "url": "_next/58cf54ed-3af5-4bd9-b1ad-28fb984f4606/page/index.js",
    "revision": "2c48c0999f274e360717276acbd48f6c"
  },
  {
    "url": "_next/66cb8966bf183e4c8d0bcc295d83ecda/app.js",
    "revision": "66cb8966bf183e4c8d0bcc295d83ecda"
  },
  {
    "url": "index.html",
    "revision": "ff37c9c3a0ca3fe066b8f1fe25b97940"
  },
  {
    "url": "static/styles.css",
    "revision": "95a6eaca8e0ecc6c1e5602b01be527ff"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
