class HelloTest {
  constructor(public hi: string, public globe: string) { } 
}

class MultiHelloObject {
  constructor(public first: HelloTest, public second: HelloTest) { } 
}

class MultiHelloArray {
  constructor(public contents: HelloTest[]) { } 
}

class HelloTestWithToJSON extends HelloTest {
  constructor(hi: string, globe: string) { 
    super(hi, globe);
  } 

  toJSON(key: any): string {
    if (key) {
      console.log('key = ' + key as string);
    } 

    return 'custom-data-goes-here';
  }
}

function myReplacerNull(this: any, key: string, value: any): any {
  console.log('myReplacerNull called; key = ' + key.toString() + '; value = ' + value.toString());
  return null;
}
function myReplacerUndefined(this: any, key: string, value: any): any {
  console.log('myReplacerUndefined called; key = ' + key.toString() + '; value = ' + value.toString());
  return undefined;
}
function myReplacerDemo(this: any, key: string, value: any): any {
  console.log('myReplacerDemo called; key = ' + key.toString() + '; value = ' + value.toString());
  return 'DEMO';
}
function myReplacerExcludeNumber(this: any, key: string, value: any): any {
  console.log('myReplacerExcludeNumber called; key = ' + key.toString() + '; value = ' + value.toString());
  if (typeof value == 'number') {
    return null;
  } else {
    return value;
  }
}

export class JsonExamples {
  
  constructor() {
    /*
    const hello1 = 'Hello, world';
    console.log(JSON.stringify(hello1));
*/
//    const hello2 = ['hello', 'world'];
//    console.log(JSON.stringify(hello2));
/*
    const hello3 = { hi: 'hello', globe: 'world' };
    console.log(JSON.stringify(hello3));

    const hello4 = new HelloTest('hello', 'world');
    console.log(JSON.stringify(hello4));

    const hello5 = new MultiHelloObject(
      new HelloTest('hello', 'world'),
      new HelloTest('hello', 'world'));
    console.log(JSON.stringify(hello5));

    const hello6 = new MultiHelloArray(
      [new HelloTest('hello', 'world'),
      new HelloTest('hi', 'globe')]);
    console.log(JSON.stringify(hello6)); 
    
    // Test an objec with toJSON
    const hello7 = new HelloTestWithToJSON('hello', 'world');
    console.log(JSON.stringify(hello7));

    const hello8 = new MultiHelloObject(
      new HelloTestWithToJSON('hello', 'world'),
      new HelloTestWithToJSON('hello', 'world'));
    console.log(JSON.stringify(hello8));

    const hello9 = new MultiHelloArray(
      [new HelloTestWithToJSON('hello', 'world'),
      new HelloTestWithToJSON('hi', 'globe')]);
    console.log(JSON.stringify(hello9)); 

    const hello10 = new MultiHelloObject(
      new HelloTest('hello', 'world'),
      new HelloTest('hello', 'world'));
    console.log(JSON.stringify(hello10, null, 4));
    console.log(JSON.stringify(hello10, null, 'DEMO'));   



console.log(JSON.stringify(hello2, myReplacerNull));
console.log(JSON.stringify(hello2, myReplacerUndefined));
console.log(JSON.stringify(hello2, myReplacerDemo));

const hello11 = ['hello', 100, 'world', 200];
console.log(JSON.stringify(hello2, myReplacerExcludeNumber));
*/
const hello12 = new MultiHelloObject(
  new HelloTest('first-hello', 'first-world'),
  new HelloTest('second-hello', 'second-world'));
//console.log(JSON.stringify(hello12));
//console.log(JSON.stringify(hello12, ['first'])); // will not include hi
//console.log(JSON.stringify(hello12, ['first', 'hi']));

const jsonText:string  = JSON.stringify(hello12); 
// yes, string is not requried here, we put it in to emphasize it is a string we get back from stringify

let obj = JSON.parse(jsonText);
console.log(JSON.stringify(obj));

obj = JSON.parse(jsonText, (key, value) => null);
console.log(JSON.stringify(obj));

obj = JSON.parse(jsonText, (key, value) => {
  if (key == 'hi') { return 'transformedHi' } else { return value} });
console.log(JSON.stringify(obj));

}
}
