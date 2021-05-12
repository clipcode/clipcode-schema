# IndexedDB
[BACK](semantic-core-model.md) - [NEXT](storage-cache-api.md) - [INTRO](readme.md)

For most scenarios where modern web apps / PWAs need persisent storage client-side (beyond the lifetime of the current browsing session), IndexedDB is what should be used. The spec is here:
* [Indexed Database API ](https://www.w3.org/TR/IndexedDB)

which crisply introduces it as: 
>This document defines APIs for a database of records holding simple values and hierarchical objects. Each record consists of a key and some value. Moreover, the database maintains indexes over records it stores. An application developer directly uses an API to locate records either by their key or by using an index. A query language can be layered on this API. An indexed database can be implemented using a persistent B-tree data structure.

It should be noted IndexedDB is a well-defined API into a database engine, not the database engine itself. Each browser vendor needs to provide its own implementation of IndexedDB that supplies this API. 

IndexedDB is defined as a set of interfaces with significant use of callbacks. It is asynchronous, to allow high-volume / low-impact data handling.  
IndexedDB is an API, not a query language (e.g. it is not  replacement for SQL). Application developers can use the IndexedDB API directly to query the database (this is the path most devs take), or tool developers could construct their own language on top (perhaps for specialist needs). 

It should be noted the data stored client-side by IndexedDB is stored on a "best-effort" basis, and may be deleted ("evicted") if the browser determines it needs the space - so long term storage still needs use of the cloud. 

Working with IndexedDB can be divided into two - working with a DB factory and databases objects, and then handling actual DB requests. the first of these involves these interfaces:

## DBFactory and Database object

* `IDBFactory` - the entry point into IndexedDB (implemented by window.indexedDB)
* `IDBOpenDBRequest` - An open DB request 
* `IDBDatabase` - represents a connection to an actual database
* `IDBTransaction` - represents a transaction (IndexedDB is transactional)

### IDBFactory 
`IDBFactory` is the entry point into IndexedDB for your code. It is suppleid via the `indexedDB` property of `WindowOrWorkerGlobalScope` 
````
interface WindowOrWorkerGlobalScope {
    ...
    readonly indexedDB: IDBFactory;
    ...
}
````
It is a simple interface with methods for open, delete and compare:
````
interface IDBFactory {
    /**
     * Attempts to open a connection to the named database with the current version, or 1 if it does not already exist. If the request is successful request's result will be the connection.
     */
    open(name: string, version?: number): IDBOpenDBRequest;
    /**
     * Attempts to delete the named database. If the database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request is successful request's result will be null.
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if the keys are equal.
     * Throws a "DataError" DOMException if either input is not a valid key.
     */
    cmp(first: any, second: any): number;
}
````
Later versions add an extra method called `databases`, which enumerates existing databases. 

Let's explore `open` first. It takes in the name of the database you wish to open and an optional version number. It behaves asynchronously, so returns an instance of `IDBOpenDBRequest` and sometime later may emit events, such as `upgradeneeded`, `blocked` or `versionchange`. Each database has a version number for its schema, and by default this is set to 1 when creating the database if not supplied by the client code. 

````
    let myDBRequest: IDBOpenDBRequest = window.indexedDB.open('ClipcodePrimer', 104);
````
If using Chrome, bring up Developer Tools, select the Application tab and you will now see this new database listed under IndexedDB, with the given version and zero objects since we have yet to add any. 

Next let's look at `deleteDatabase`. It also returns an `IDBOpenDBRequest`, whose success callback is fired when the database is deleted. 
````
    let myDBRequest2: IDBOpenDBRequest = window.indexedDB.deleteDatabase('ClipcodePrimer');
````
`cmp` returns a key comparison: 
````
    const x =  'hellO';
    const y =  'world';
    let cmpResult = window.indexedDB.cmp(x, y);
    if (cmpResult == -1) {
      console.log('1st is less than 2nd');
    } else if (cmpResult == 0) {
      console.log('1st is equal to 2nd');
    } else if (cmpResult == 1) {
      console.log('1st is greater than 2nd');
    }
    else {
      console.log('Unexpected result');
    }
````
to enumerate existing databases, you can use the `databases` method if available. first we have define the `IDBDatabaseInfo` interface:
````
interface IDBDatabaseInfo {
  name: string;
  version: number;
};
````
and we can call databases() like so:
````
if ((window.indexedDB as any).databases) {
        let databasesResults: Promise < IDBDatabaseInfo[]>  
            = (window.indexedDB as any).databases();

        if (databasesResults) {
            databasesResults.then ( ( diList: IDBDatabaseInfo[]) => {
            console.log('diList.length = ' + diList.length);
            diList.forEach (di => 
              console.log('name: ' + di.name + '; version = ' 
                                         + di.version.toString() + '\n'));          
            });
        } else {
            console.log('databasesResults empty');
        }
    } else {
        console.log('window.indexedDB.databases() not available');
    }
````

### IDBOpenDBRequest
The `IDBFactory.open` and `IDBFactory.deleteDatabase` methods return an instance `IDBOpenDBRequest`, which is derived from `IDBRequest`. 
This mostly offers methods to add and remove event handlers and to set custom event handlers. The three most important are ``IDBRequest.onsuccess`, `IDBRequest.onerror` and `onupgradeneeded`, used to indicate the success or failure of the request and to upgrade the database schema.  

````
/** Also inherits methods from its parents IDBRequest and EventTarget. */
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    onblocked: ((this: IDBOpenDBRequest, ev: Event) => any) | null;
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: 
      (this:   IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: 
        boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: 
      boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: 
      (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: 
        boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, 
      options?: boolean | EventListenerOptions): void;
}
````
The `onsuccess` method can be written like so:
````
 myDBRequest3.onsuccess = (ev: any) => { 
        console.log('onsuccess called'); 
        let myDatabase = ev.target.result;
        if (myDatabase == null) {
          console.log('ERROR: this.myDatabase == null');
        } else {
            console.log('calling close');
            myDatabase.onclose = () => { console.log('IDBDatabase.close called'); };
        } 
    };
````
The `onerror` indicated an error situation: 
````
   myDBRequest3.onerror = () => { console.log('onerror called') };
````
The `onupgradeneeded` indicates a new version of the database schema is required:
````
    myDBRequest3.onupgradeneeded = () => { console.log('onupgradeneeded called') };
````


### IDBDatabase
The ``IDBDatabase` is your connection to a specific database. 

````
/** This IndexedDB API interface provides a connection to a database; you can use an 
IDBDatabase object to open a transaction on your database then create, manipulate, 
and delete objects (data) in that database. The interface provides the only way to 
get and manage versions of the database. */
interface IDBDatabase extends EventTarget {
    // Returns the name of the database.     
    readonly name: string;
    // Returns a list of the names of object stores in the database.     
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    // Returns the version of the database.     
    readonly version: number;
    // Closes the connection once all running transactions have finished.     
    close(): void;

    // Creates a new object store with the given name and options and returns a new IDBObjectStore.
    // Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.     
    createObjectStore(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    // Deletes the object store with the given name.
    // Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.     
    deleteObjectStore(name: string): void;
    // Returns a new transaction with the given mode ("readonly" or "readwrite") and 
    // scope which can be a single object store name or an array of names.     
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: 
      (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, 
      options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: 
      (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any,   options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

````
### Object Store 
In IndexedDB, an object store is a named container of keyed records. The name of the object store must be unique. The `IDBObjectStore` interface is used to interact with object stores:
````
interface IDBObjectStore {
    // Returns true if the store has a key generator, and false otherwise.     
    readonly autoIncrement: boolean;
    // Returns a list of the names of indexes in the store.
    readonly indexNames: DOMStringList;
    // Returns the key path of the store, or null if none.     
    readonly keyPath: string | string[];
    // Returns the name of the store.     
    name: string;
    // Returns the associated transaction.     
    readonly transaction: IDBTransaction;
    /**
     * Adds or updates a record in store with the given value and key.
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     * If successful, request's result will be the record's key.
     */
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    /**
     * Deletes all records in store.
     * If successful, request's result will be undefined.
     */
    clear(): IDBRequest<undefined>;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     * If successful, request's result will be the count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be satisfied with the data already in store the upgrade transaction will abort with a "ConstraintError" DOMException.
     * 
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * Deletes records in store with the given key or in the given key range in query.
     * If successful, request's result will be undefined.
     */
    delete(key: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    /**
     * Deletes the index in store with the given name.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteIndex(name: string): void;
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     * If successful, request's result will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     * If successful, request's result will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    index(name: string): IDBIndex;
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in store are matched.
     * If successful, request's result will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. 
     * If query is null, all records in store are matched.     
     * If successful, request's result will be an IDBCursor pointing at the first matching record, or null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    /**
     * Adds or updates a record in store with the given value and key.     
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.     
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record 
     * with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     * If successful, request's result will be the record's key.
     */
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}
````

### Transactions
All interactions with data occurs within the context of a transaction. With IndexedDB, a transaction is initialized with the names of one or more object stores and so a single transaction can apply to multiple object stores. The `IDBTransaction` interface represents a transaction:
````
interface IDBTransaction extends EventTarget {
    // Returns the transaction's connection.     
    readonly db: IDBDatabase;
    // If the transaction was aborted, returns the error (a DOMException) providing the reason.     
    readonly error: DOMException;
    // Returns the mode the transaction was created with ("readonly" or "readwrite"), or "versionchange" for an upgrade transaction.     
    readonly mode: IDBTransactionMode;
    // Returns a list of the names of object stores in the transaction's scope. For an upgrade transaction this is all object stores in the database.     
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    // Aborts the transaction. All pending requests will fail with a "AbortError" DOMException and all changes made to the database will be reverted.     
    abort(): void;
    // Returns an IDBObjectStore in the transaction's scope.     
    objectStore(name: string): IDBObjectStore;

    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
````

### IDBRequest
Request objects are how applications work with data requests in IndexedDB. The `IDBRequest` interface defines the provided API:
````
// The request object does not initially contain any information about the result of the operation, 
// but once information becomes available, an event is fired on the request, and the information 
// becomes available through the properties of the IDBRequest instance. */
interface IDBRequest<T = any> extends EventTarget {
    //  When a request is completed, returns the error (a DOMException), or null if the 
    // request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.
    readonly error: DOMException | null;
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    // Returns "pending" until a request is complete, then returns "done".
    readonly readyState: IDBRequestReadyState;
    // When a request is completed, returns the result, or undefined if the request failed. 
    // Throws a "InvalidStateError" DOMException if the request is still pending.
    readonly result: T;
    // Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    // Returns the IDBTransaction the request was made within. If this as an open request, then it returns an 
    // upgrade transaction while it is running, or null otherwise,
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
````
### IDBIndex
IndexedDB manages indices over the data. Applications handling larger volumes of data will want to add an index as it greatly enhances performance for a small amount of extra processing requirements. `IDBIndex` is used to work with indices:
````
/** IDBIndex interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data. */
interface IDBIndex {
    readonly keyPath: string | string[];
    readonly multiEntry: boolean;
    // Returns the name of the index.     
    name: string;
    // Returns the IDBObjectStore the index belongs to.     
    readonly objectStore: IDBObjectStore;
    readonly unique: boolean;
    // Retrieves the number of records matching the given key or key range in query.
    // If successful, request's result will be the count.     
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    // Retrieves the value of the first record matching the given key or key range in query.
    // If successful, request's result will be the value, or undefined if there was no matching record.     
    get(key: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>;
    // Retrieves the values of the records matching the given key or key range in query (up to count if given).
    // If successful, request's result will be an Array of the values.     
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    // Retrieves the keys of records matching the given key or key range in query (up to count if given).
    // If successful, request's result will be an Array of the keys.     
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    // Retrieves the key of the first record matching the given key or key range in query.
    // If successful, request's result will be the key, or undefined if there was no matching record.     
    getKey(key: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    // Opens a cursor over the records matching query, ordered by direction. If query is null, all records in index are matched.
    // If successful, request's result will be an IDBCursorWithValue, or null if there were no matching records.     
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    // Opens a cursor with key only flag set over the records matching query, ordered by direction. 
    // If query is null, all records in index are matched.
    // If successful, request's result will be an IDBCursor, or null if there were no matching records.     
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}
````

[BACK](semantic-core-model.md) - [NEXT](storage-cache-api.md) - [INTRO](readme.md)
