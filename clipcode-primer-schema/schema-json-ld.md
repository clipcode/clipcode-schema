# JSON-LD (Linked Data)

[BACK](schema-rdf.md) - [NEXT](schema-org.md) - [INTRO](readme.md)

JSON-LD builds on JSON and may be used in a simple form (as an enhanced version of JSON) and in a more advanced form, with RDF. Clipcode recommends the richer RDF approach as it more fully captures knowledge graphs and comes with a number of long-term advantages. Schema.org's use of JSON-LD is based on the richer RDF form.   

The "LD" in JSON-LD means linked data. With regular JSON, everything is in the one document and self-contained. Which is fine to begin with and for smaller projects, but as projects get bigger with more and people and organizations become involved (possibly working remotely), it gets harder and harder to store everything together. All growing projects go through this. The solution is to allow a distributed setup and permit data items to link with each other. An IRI (an internationalized URI) is a critical part of created shared identity of constructs, and knowledge graphs created by different people at different times in different parts of the world, can make statements about the same construct, so long at they all use the same IRI for the same construct (or support some kind of matching). when this idone, knowledge graphs with distinct provenances can be merged with ease. 

The data model used by JSON-LD is essentially the RDF data model with some additional rules/conventions to suit the JSON world. 

## JSON-LD Keywords
JSON-LD has a number of keywords (prefixed with @) which have special meaning in a JSON-LD document. The most common are as follows.

### Context
The context of a JSON-LD document is represented using: 
````
@context
````
A context is a place you put re-usable information. One common usage is for namespace prefixes, so rather than defining a very long full IRI everywhere, we add a short prefix and the full IRI to the context; and then everywhere else in the JSON-LD document we just use the prefix. More complex JSON-LD documents will have a longer list of prefixes: 
````
    "@context": {
        "schema": "https://schema.org/";
        "coremo": "https://clipcode.org/base/schema/coremo/";
        "dirmo": "https://clipcode.org/base/schema/dirmo/";
        "polmo": "https://clipcode.org/base/schema/polmo/";
        "usermo": "https://clipcode.org/base/schema/usermo/";
        "fomo": "https://clipcode.org/base/schema/fomo/";
        "camo": "https://clipcode.org/base/schema/camo/";
        "appmo": "https://clipcode.org/base/schema/appmo/";
    };
````
We can also have a default IRI (without a prefix name):
````
        "@context":"https://schema.org",
````
Deeper in the JSON-LD hierarchy, the context can be redefined, by adding another `@context`. 

### Type
The type of a construct in JSON-LD is represented using: 
````
@type
````
Objects can be typed which means that somewhere a type construct has been created, possibly with a number of properties attached to it and by using @type in an object (instance) definition we are saying this object is an instance of this @type. 
 
### Graph
JSON-LD documents can contain multiple root objects within a top-level graph object. The graph is defined using: 
````
@graph
````
## Forms of JSON-LD
JSON-LD can be represent in a flexible number of ways and it is permitted to transform between them:
* Expanded Document Form - removes @context, which is achieved by expanding all IRIs, types and values with absolute IRIs 
* Compacted Document Form - a supplied context, separate from the original JSON-LD document, is used to abbreviate the contents of the JSON-LD document where possible 
* Flattened Document Form - JSON-LD does allow deep embedding of sub-objects and the process of flattening reverses this, by creating a flat structure and making whatever changes are neccessary to allow this
* Framed Document Form - framing allow an externally supplied structure to be imposed on an existing JSON-LD document

## Embedding JSON-LD in HTML
It is trivial to embed JSON in HTML and since JSON-LD is just JSON, this applies to JSON-LD as well. This is why Google and the other search engines recommend web developers use the JSON-LD representation of Schema.org types when adding these to web pages, as it is simple and significantly less error prone compared to competing formats. 

[See the following restrictions](https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements)
To overcome this, a `replacer` function could be passed to the `JSON.stringify` method - as shown with the [safeJsonLdReplacer from here](https://github.com/google/react-schemaorg/blob/master/src/json-ld.tsx). 

Also of interest:
[This section of spec has more](https://w3c.github.io/json-ld-syntax/#embedding-json-ld-in-html-documents)

[BACK](schema-rdf.md) - [NEXT](schema-org.md) - [INTRO](readme.md)
