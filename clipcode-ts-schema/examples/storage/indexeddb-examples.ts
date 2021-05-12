interface IDBDatabaseInfo {
  name: string;
  version: number;
};

export class IndexedDBExamples {
  constructor() {
    console.log('Calling IDBFactory.open');
    let myDBRequest1: IDBOpenDBRequest = window.indexedDB.open('ClipcodePrimer', 104);
    console.log('Calling IDBFactory.deleteDatabase');
    let myDBRequest2: IDBOpenDBRequest = window.indexedDB.deleteDatabase('ClipcodePrimer');

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

    console.log('Calling IDBFactory.open with onsuccess / onerror callbacks');
    let myDBRequest3: IDBOpenDBRequest = window.indexedDB.open('ClipcodePrimer2', 110);
    myDBRequest3.onsuccess = (ev: any) => { 
        console.log('onsuccess called'); 
        let myDatabase = ev.target.result;
        if (myDatabase == null) {
          console.log('ERROR: this.myDatabase == null');
        } else {
            console.log('calling close');
            myDatabase.onclose = () => { console.log('IDBDatabase.close called'); };
            (myDatabase as IDBDatabase).close();
        } 
    };
    myDBRequest3.onerror = () => { console.log('onerror called') };

    myDBRequest3.onupgradeneeded = (ev: any) => { 
        console.log('onupgradeneeded called') };


        let xx: IDBDatabase;

        let ff: IDBObjectStore;

        let ffd: IDBTransaction;

        let sds: IDBIndex;
        




}

  
}
