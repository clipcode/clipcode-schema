# RDF (W3C's Resource Description Framework)

[BACK](schema-json.md) - [NEXT](schema-json-ld.md) - [INTRO](readme.md)

RDF is a set of standards created by W3C to describe knowledge graphs. It can be considered both as an abstract model for knowledge graphs and as a multitude of concrete representation formats (of which JSON-LD is just one). Regardless of which concrete format you use, the ideas from the RDF abstract model are relevant with certain representation-specific enhancements added as needed. Here we explore the RDF abstract model and in the next primer we explore one concrete format, JSON-LD, which is the one we recommend to use (and the one recommended for [schema.org](https://schema.org) work).

We are primarily interested in the two main RDF specs:
* [The core RDF Standard](https://www.w3.org/TR/rdf11-concepts/)
* [The RDF Schema Standard](https://www.w3.org/TR/rdf-schema/) 

The current version of RDF is 1.1. 

When working with RDF you will see these two namespace prefixes often used:
* "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
* "rdfs": "http://www.w3.org/2000/01/rdf-schema#",

## RDF 
RDF data items are often called triples because they are essentially statements with three parts:
* Subject
* Predicate
* Object

RDF describes a mathematical graph, with the subject and the object as vertices in the graph and the property as an edge. It is an extremely simple representation, but from this tiny triple, huge knowledge graphs can be (and are) constructed, sometimes with billions of triples. Technically, an RDF graph is known as a directed multi-graph, meaning each vertex-edge-vertex triple has a direction (from the subject to the object) and each pair of vertices may have more that one edge connecting them. By adding a triple to a graph we are asserting what is stated in that triple actually holds. 

Subjects and objects are identified by IRIs (internationalized Resource Identifiers). This is probably better known as URIs, or even URLs. The idea of IRIs came later, and added additional capabilities to make URIs/URLs work in international settings. An object can also be represented by a literal (e.g. string or number). Often these literals are represented by XSD datatypes. Layered standards can add their own datatypes - for example, schema.org adds a small number of simpler custom datatypes and does not use XSD datatypes.

Sometimes when we don't want to directly identify a subject, but we know it exists. For this we can use a bank node, which we can think of as a placeholder. 

## RDF Schema (rdfs)
RDF Schema adds more structure to the foundational RDF spec. In particular, it lets you:
* Define classes (and their sub-classes)
* Define properties (and subproperties)
* Add comments and labels to constructs

It should be noted classes in RDF are passive (just contain data, no behavior). Also, classes support multiple inheritance. Here are the more importatn RDF Schema constructs (as a matter of interest, e list the frequency in schema.org)

RDF classes are defined using:
* rdfs:Class (there are 874 uses of rdf:Class in schema.org) 

RDF subclasses are defined using: 
* rdfs:subClassOf (there are 884 uses of rdfs:subClassOf in schema.org)

RDF properties are defined using:
* rdf:Property (there are 1387 uses of rdf:Property in schema.org)
Note: despite the namespace prefix, the rdf:Property is actually defined in the RDF Schema spec, not the main RDF spec.

RDF subproperties are defined using:
* rdfs:subPropertyOf (there are 136 uses of rdfs:subPropertyOf in schema.org)

RDF Schema defines rdfs:domain and rdfs:range to allow a property to be attached to a subject and an object (one of each). Note schema.org does not use rdfs:domain and rdfs:range, as it wishes to allow each property to have one or more types are its domain and range (so instead, schema.org uses: schema:domain and schema:range). 

RDF labels are used to name types (e.g. in a visual display of the graph) and are defined using: 
* rdfs:Label (there are 2692 uses of rdfs:Label in schema.org)

RDF comments are human-readable descritption strings, defined using: 
* rdfs:comment (there are 2691 uses of rdfs:comment in schema.org)

RDF lists (rdf:List) are closed collections. They have a specific start element (rdf:first), zero or more "rest" (remainder") elements (ref:rest) and the end of the list is signified with rdf:nil. (RDF Lists are not used in Schemaorg). 

RDF datasets can hold multiple graphs. All except one need to be named (provided with an IRI or blank node, to distinguish them from other graphs). One graph in a data set may contain no name, in which case it is considered the default graph. (For JSON-LD, which also supports multiple graphs, note all are named - the one without a name is provided with a blank node to represent its name). 

[BACK](schema-json.md) - [NEXT](schema-json-ld.md) - [INTRO](readme.md)
