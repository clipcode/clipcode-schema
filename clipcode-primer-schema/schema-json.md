# JSON (Just a Simple Object Notation)

[BACK](intro.md) - [NEXT](schema-rdf.md) - [INTRO](readme.md)

## Overview
JSON is a text-based data interchange format. If you wish to share data between two blocks of code (written in the same or different programming languages), whether located on the same machine or distributed half-way across the world, JSON is often your first format choice for a variety of reasons, including:
* It is extremely simple to understand
* It really is supported everywhere
* It is very popular, which means very many software developers and data scientists are already deeply familar with it
* It is human-readable
* Among text-based formats, it is efficient (yes, competing binary formats are more efficient, but these alternatives lack all the above features)

Originally "JSON" stood for "JavaScript Object Notation", as the first language that supported it was JavaScript, but these days every modern programming language supports working with JSON. So it is best to think of "JSON" as "Just a Simple Object Notation". 

JSON has been standardized by ECMA International - the same standards body that is responsible for JavaScript. The JSON standard is actually very short (just 5 pages in the main part of the standard), with a number of informative diagrams, so it will take you less than 10 minutes to read:
* [The JSON data interchange syntax](https://www.ecma-international.org/publications-and-standards/standards/ecma-404/)

## Primer For Data Scientists
JSON has just six structural tokens:
* `[` and `]` - to delimit the beginning and end of an array (possibly nested)
* `{` and `}` - to delimit the beginning and end of an object
* `:` - to separate a property's name from its value
* `,` - to separate two arrays, objects or properties 

There are three literal name tokens
* `true` and `false` for boolean values
* `null`  

`string` and `number` represent textual and numeric values respectively. Note that strings are delimited with double-quotes (unlike in TypeScript, single quotes will not do). Number values represent both integer and floating point numbers. Note that JSON does not have a distinct representation for Date, so it is often best to represent date constructs as ISO strings.  

The usual whitespace rules also apply and whitespace is ignored when extracting data from JSON. 

JSON is based around the construct of a value, which can be one of:
* object
* array
* string
* number
* true
* false
* null

An object is delimited by `{` and `}`. An object is a comma-separated list of properties, represented as:
* name: value (where name is a string, and value is an instance of one of the above values)

An array is delimited by `[` and `]`. An array is a comma-separated list of values.  
* `[ item, item, item ]`

Both objects and arrays may be empty.

Very important (many folks new to JSON make this mistake): JSON forbids trailing commas at the end of objects and arrays!

Nesting is extremely important to JSON - values may nest, thus giving a hierarchical nature to JSON texts. 

There are a few things JSON does not support:
* binary data - it is a simple text format. If you need to represent binary your options are either to store it is a separate (non-JSON) document and somehow refer to it in the JSON document, or else encode the binary as text (e.g. base64). 
* Cyclic graphs - where child objects refer to parents in some manner
* There is no way in JSON to directly indicate a number is meant to be either a natural number (=>0), an integer or a float.  
* Undefined - JSON only supports null, which is not the same
* For numbers, leading zeroes are not allowed and when a number has a decimal point, it must also have a digit after that. 
* JSON does not allow comments

JSON's representation is extremely simple so often higher level standards are required that layer additional requirements above what is in JSON. 

## Primer For TypeScript Developers
JSON is supported by every modern programming language - see the long list of librares at the bottom of this page: 
* [json.org](https://www.json.org/json-en.html)

As an example, let us explore JSON from a TypeScript developer's perspective. The approach with other languages will be quite similar. 

Start by thinking that JSON is a serialized form of a TypeScript object and you will be very close to correct. There are a couple of minor differences but in general what one represents in TypeScript can also be represented in JSON.

TypeScript (or more precisely, its execution environment, e.g. the browser engine) offers the `JSON` object with these two static methods: 
* `stringify` - converts a TypeScript object to a block of text
* `parse` - converts a block of text to a TypeScript object 

What developers do with the objects returned by parse or the text blocks returned by stringify is up to them and beyond the scope of the JSON object - its singular job is to convert between JSON textual representations and objects. A very familiar workpattern is for a developer to create a TypeScript object, populate its properties and have it perform some actions; and then calls `stringify`, producing JSON text, when is sent from the browser to the web server in the body of an HTTPS request; later, when the HTTPS response is received, its body is extracted and passed to `JSON.parse`, which returns a TypeScript object, which the web app then works with.

### stringify
JSON.stringify comes with two signatures:

````
    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     */
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer An array of strings and numbers that acts as an approved list
     *        for selecting the object properties that will be stringified.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     */
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
````
Let's start with a few simple examples: 
````
    const hello1 = 'Hello, world';
    console.log(JSON.stringify(hello1));

    const hello2 = ['hello', 'world'];
    console.log(JSON.stringify(hello2));

    const hello3 = { hi: 'hello', globe: 'world' };
    console.log(JSON.stringify(hello3));
````
Running this code produces this output:
````
"Hello, world"
["hello","world"]
{"hi":"hello","globe":"world"}
````
To help us show objects and arrays in a number of different ways, we define: 
````
class HelloTest {
  constructor(public hi: string, public globe: string) { } 
}

class MultiHelloObject {
  constructor(public first: HelloTest, public second: HelloTest) { } 
}

class MultiHelloArray {
  constructor(public contents: HelloTest[]) { } 
}
````
Now we can use these in code like this: 
````
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
````
which produces this output:
````
{"hi":"hello","globe":"world"}

{
  "first":{"hi":"hello","globe":"world"},
  "second":{"hi":"hello","globe":"world"}
}

{
  "contents":[
    {"hi":"hello","globe":"world"},
	{"hi":"hi","globe":"globe"}
  ]
}
````
Objects that wish to influence their JSON representation can provide a `toJSON` method and when `JSON.stringify()` encounters such an object, it will use the output of `toJSON()` to represent that object. Let's see how it works. This sample class implements `toJSON()`:
````
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
````
This class can be used in client code as follows:
````
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
````
The value of the key depends on how the object is being used. If this object has directly been passed to `stringify()`, they no key is provided. If the object is the property of another object, then the key is the property name (e.g. 'first', 'second'. If an array of objects has been passed to `stringify()`, then the key is the 0-based index into that array (0, 1, ..). So out example producs the following output:
````
"custom-data-goes-here"

key = first
key = second
{"first":"custom-data-goes-here","second":"custom-data-goes-here"}

key = 0
key = 1
{"contents":["custom-data-goes-here","custom-data-goes-here"]}
````
It should be note that JSON does not directly supported the JavaScript Date object, but Date does supply a toJSON method, which returns the result of a call to `Date.toISOString()`. There is no `fromJSON()` method. 

The space parameter to `stringify()` controls whitepace insertion. It can be not provided or null, in which case no whitepace is inserted; it can be a stirng, in whcih case that string is inserted, or it can be a number, in which case that number of spaces is inserted. So this code:
````
    const hello10 = new MultiHelloObject(
      new HelloTest('hello', 'world'),
      new HelloTest('hello', 'world'));
    console.log(JSON.stringify(hello10, null, 4));
````
produces this output:
````
{
    "first": {
        "hi": "hello",
        "globe": "world"
    },
    "second": {
        "hi": "hello",
        "globe": "world"
    }
}
````
(which is quite readable). However, this code:
````
    console.log(JSON.stringify(hello10, null, 'DEMO'));
````
produces this (confusing?) output:
````
{
DEMO"first": {
DEMODEMO"hi": "hello",
DEMODEMO"globe": "world"
DEMO},
DEMO"second": {
DEMODEMO"hi": "hello",
DEMODEMO"globe": "world"
DEMO}
}
````
`stringify` accepts an optional `replaceer` parameter, whose role is to replace objects according to certain rules supplied by the client. The two forms of the `replacer` parameter are as a function and an array, defined like so:
````
replacer?: (this: any, key: string, value: any) => any
replacer?: (number | string)[] | null
````
Without replacer, all properties are added to the JSON text. With replacer, the client has more control.
When called with a replacer function, the replacer is called once with no key for the entire value, and then for the resulting intermediate value, the replacer is called again for each property of that object. So be aware that the replacer can be called multiple times. Here is some sample code: 
````
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
...
console.log(JSON.stringify(hello2, myReplacerNull));
console.log(JSON.stringify(hello2, myReplacerUndefined));
console.log(JSON.stringify(hello2, myReplacerDemo));

const hello11 = ['hello', 100, 'world', 200];
console.log(JSON.stringify(hello2, myReplacerExcludeNumber));
````
which produces this result:
````
["hello","world"]
myReplacerNull called; key = ; value = hello,world
null
myReplacerUndefined called; key = ; value = hello,world
undefined
myReplacerDemo called; key = ; value = hello,world
"DEMO"
myReplacerExcludeNumber called; key = ; value = hello,world
myReplacerExcludeNumber called; key = 0; value = hello
myReplacerExcludeNumber called; key = 1; value = world
["hello","world"]
````
The alternative `replacer` signature is to supply an array, in whcih case only the properties whose names appear in the array are included in the JSON text. This code:
````
const hello12 = new MultiHelloObject(
  new HelloTest('first-hello', 'first-world'),
  new HelloTest('second-hello', 'second-world'));
console.log(JSON.stringify(hello12));
console.log(JSON.stringify(hello12, ['first'])); // will not include hi
console.log(JSON.stringify(hello12, ['first', 'hi']));
````
produces this result:
````
{"first":{"hi":"first-hello","globe":"first-world"},"second":{"hi":"second-hello","globe":"second-world"}}
{"first":{}}
{"first":{"hi":"first-hello"}}
````
### parse
the ``parse()` method parses valid JSON text and returns an object. 
````
    /**
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     * @param reviver A function that transforms the results. This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
     */
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
````
It accepts a `reviver` parameter, which is a transformer function. This sample code:
````
const jsonText:string  = JSON.stringify(hello12); 
// yes, string is not requried here, we put it in to emphasize it is a string we get back from stringify

let obj = JSON.parse(jsonText);
console.log(JSON.stringify(obj));

obj = JSON.parse(jsonText, (key, value) => null);
console.log(JSON.stringify(obj));

obj = JSON.parse(jsonText, (key, value) => {
  if (key == 'hi') { return 'transformedHi' } else { return value} });
console.log(JSON.stringify(obj));
````
produces this output:
````
{"first":{"hi":"first-hello","globe":"first-world"},"second":{"hi":"second-hello","globe":"second-world"}}
null
{"first":{"hi":"transformedHi","globe":"first-world"},"second":{"hi":"transformedHi","globe":"second-world"}}
````

### Notes 
Note that both TypeScript/JavaScript and JSON support null. However, though TypeScript/JavaScript support undefined, JSON does not. If representing an object in JSON and you have some property that is undefined, simply omit it. When this JSON is loaded into TypeScript/JavaScript, it becomes undefined. If you have an object in TypeScript/JavaScript that has a property with a value of undefined, when this gets serialized to JSON it is represented as null.   

[BACK](intro.md) - [NEXT](schema-rdf.md) - [INTRO](readme.md)
