export class CacheAPIExamples {
  constructor() {
    let c = caches;
    c.open('demo1')
      .then( (value: Cache) => 
      { 
        console.log('Successfully opened / created demo1');           
        console.log('now let us delete it');
        c.delete('demo1').then ((b) => { 
          if (b) { console.log('Result of delete = ' + b.toString())} }); 
      })
      .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));

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

    c.open('demo3')
    .then( (value: Cache) => 
    { 
      console.log('Successfully opened / created demo3');           
      console.log('now let see it if has a specific cache');
      c.has('demo3').then ((b) => { 
        if (b) { console.log('Result of has = ' + b.toString())} }); 
    })
    .catch( (reason: any)  => console.log('Error calling CacheStorage.open'));


    c.match('https://clipcode.org')
    .then( (value: Response | undefined ) => {
        if (value) {
            console.log('value found');
        } else {
            console.log('value is undefined');
        }
    })
    .catch( (reason: any)  => console.log('Error calling CacheStorage.match'));

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
  }
}

