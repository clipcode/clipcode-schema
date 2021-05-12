# The Cache API
[BACK](storage-indexeddb.md) - [INTRO](readme.md)

The API faciliates storing web request/response pairs, beyond the lifetime of the current browsing session. It is not a general client-side data storage mechanism (if you need that, pick IndexedDB) but rather specifically for HTTP traffic, which can greatly reduce it. The Cache API is ideal in PWA scenarios where you wish to download an app and all its necessary files/images for execution (potentially large, and potentially for offline usage). Web developers can also use the Cache API for their own needs. The Cache API provides two objects, cacheStorage and Cache. 

Useful links: [here](https://web.dev/cache-api-quick-guide/) and [here](https://web.dev/storage-for-the-web/)

Note for Developers: In Chrome, with Developer Tools open, look at the "Application" tab and see the Cache Stprage contents under "Cache". 

## CacheStorage 
The CacheStroage objects holds all the existing caches. 

* CacheStorage.open - opens a cache
* CacheStorage.match - determines a match
* CacheStorage.has - determines if present
* CacheStorage.delete - deletes a cache
* CacheStorage.keys - returns list of keys (as string array)

For TypeScript developers, CacheStorage is defined in lib.dom.d.ts as:
````
/** The storage for Cache objects. */
interface CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    open(cacheName: string): Promise<Cache>;
}
````
[Detailed Description](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

To get access to the CacheStorage, use `caches`:
````
    let c = caches;
````
To open a cache and then delete it, use: 
````

    c.open('demo1')
      .then( (value: Cache) => 
      { 
        console.log('Successfully opened / created demo1');           
        console.log('now let us delete it');
        c.delete('demo1').then ((b) => { 
          if (b) { console.log('Result of delete = ' + b.toString())} }); 
      })
      .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));
````
To enumerate the contents of CacheStoage, use:
````
    c.open('demo2')
    .then( (value: Cache) => 
    { 
      console.log('Successfully opened / created demo2');           
      console.log('now let us enumerate keys');
      c.keys().then ((strList) => { 
        if (strList) { 
            console.log('Result of keys - count = ' + strList.length.toString());
            strList.forEach( s => console.log(s));
        }
      }); 
    })
    .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));
````
To determine is a Cache with a name exists, use:
````
    c.open('demo3')
    .then( (value: Cache) => 
    { 
      console.log('Successfully opened / created demo3');           
      console.log('now let see it if has a specific cache');
      c.has('demo3').then ((b) => { 
        if (b) { console.log('Result of has = ' + b.toString())} }); 
    })
    .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));
````
To see if a request exists in any cache, use:
````
    c.match('https://clipcode.org')
    .then( (value: Response | undefined ) => {
        if (value) {
            console.log('value found');
        } else {
            console.log('value is undefined');
        }
    })
    .catch( (reason: any)  => console.log('Error calling CacheStorage.match'));
````
## Cache
The Cache object holds a set of request/response pairs. It is made available to web apps via the global `caches` object. 

* Cache.match - determines a single match
* Cache.matchAll - determines all matchees
* Cache.add -  adds a single request/response pair
* Cache.addAll - adds a list fo request/response pairs
* Cache.put - allows more flexibility in what gets added
* Cache.delete - deletes an item
* Cache.keys - return list of keys 

For TypeScript developers, CacheStorage is defined in lib.dom.d.ts as:
````
/** Provides a storage mechanism for Request / Response object pairs that are cached, 
for example as part of the ServiceWorker life cycle. Note that the Cache interface is 
exposed to windowed scopes as well as workers. You don't have to use it in conjunction
with service workers, even though it is defined in the service worker spec. */
interface Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    put(request: RequestInfo, response: Response): Promise<void>;
}
````
[Detailed Description](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)

Here are some samples. Use Cache.match like so:
````
   c.open('demo4')
    .then( (value: Cache) => 
      {
        value.match('https://clipcode.org')
        .then( (value2: Response | undefined ) => {
            if (value2) {
                console.log('value2 found');
            } else {
                console.log('value2 is undefined');
            }
        })
        .catch( (reason: any)  => console.log('Error calling CacheStorage.match'));
      } 
    )
    .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));
````
Use Cache.add like so:
````
    c.open('demo5')
    .then( (value: Cache) => 
      {
        value.add('https://clipcode.org')
        .then( ( ) => {            
          console.log('add completed');            
        })
        .catch( (reason: any)  => console.log('Error calling Cache.add'));
      } 
    )
    .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));
````
Use Cache.keys like so:
````
    c.open('demo2')
    .then( (value: Cache) => 
    { 
      console.log('Successfully opened / created demo2');           
      console.log('now let us enumerate keys');
      value.keys().then ((strList) => { 
        if (strList) { 
            console.log('Result of keys - count = ' + strList.length.toString());
            strList.forEach( s => console.log(s));
        }
      }); 
    })
    .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));
````

[BACK](storage-indexeddb.md) - [INTRO](readme.md)
