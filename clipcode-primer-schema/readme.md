# Clipcode Primer Schema
This primer reviews the technologies our semantic models are layered upon - JSON, RDF, JSON-LD and [schema.org](https://schema.org/). 

Note [Clipcode Mentoring](https://www.clipcode.net/mentoring) offers technical support and mentoring to enterprise dev teams working with these technologies - it is ideal for teams who need to quickly get up to speed with them.

## Overview
JSON is a widely used and very simple (text-based) data interchange format, supported by pretty much every programming language in use today. Hence it is ideal for describing data that needs to move between different computing hosts in a seamless way. It provides a simple object notation for representing numbers, strings, values, objects and arrays, along with flexible combinations of these. 

RDF is a resource description framework and provides the logical constructs needed to define a knowledge graph, which can be represented in any of a number of alternative concrete encodings. 

JSON-LD is one (excellent) way of representing an RDF knowledge graph. JSON-LD represents a knowledge graph in JSON format and is used to describe linked data, which can be considered as blocks of data that may not be co-located (in the same JSON file) and in some way can be hyperlinked together. 

Schema.org is a collection of types for commonly needed constructs (e.g. [Person](https://schema.org/Person), [Organization](https://schema.org/Organization), [Place](https://schema.org/Place), [CreativeWork](https://schema.org/CreativeWork), [Action](https://schema.org/Action)) that most knowledge graphs require and it is sensible to come up with a shared representation of these for all to use, rather than each enterprise designing their own incompatible version. It supports a number of data interchange formats, with the most widely used (and recommended for the future) being JSON-LD. Let's explore each of these more:

[JSON](json.md)

[RDF](rdf.md)

[JSON-LD](json-ld.md)

[Schema.org](schema-org.md)

## Storing Data
These semantic models need to be stored. Many technologies are used in the cloud for storage and they vary widely depending on the stack in use (e.g. .NET, Node, Java, Go, custom). Often the JSON received in the cloud is transformed into another format (e.g. binary) for faster processing and where server-side optimizations and powerful database server engines may be used. What happens on the client is more standardized. In a modern browser environment (both when dealing with regular websites and with PWAs), there are two recommended standard ways to persist data locally (beyond the lifetime of the current browsing session) - IndexedDB and Cache API: 

[IndexedDB](storage-indexed-db.md)

[Cache API](storage-cache-api.md)

Browsers also support a number of older ways to varying degrees, but for a [variety of reasons](https://web.dev/storage-for-the-web/) these older techniques are no longer recommended.

For the future, there are experimental efforts underway by Google and others to define a File System Access API, which will allow apps to directly save and read files and directories on a local filesystem (outside the browser's sandbox) under strict security supervision. 
[This article explains the idea](https://web.dev/file-system-access/) and [this is the spec](https://wicg.github.io/file-system-access/).
See [@types](https://www.npmjs.com/package/@types/wicg-file-system-access) for TypeScript definitions. Since this is really still in development and has limited browser support for now, Clipcode recommends for today's applications intended for a general audience, it is best to mostly use IndexedDB and where responses to HTTP requests need to be cached, to use the Cache API. 
