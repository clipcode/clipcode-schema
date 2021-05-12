import { Organization, WithContext } from 'schema-dts';
 
const o: Organization = {
  "@type": "CollegeOrUniversity",
  name: "TCD"
}

// const myContext = WithContext<Organization> {
//   "@type": "CollegeOrUniversity",
//   name: "TCD"
// }

const c: WithContext<Organization> = {
  "@context": 'https://schema.org',
  "@type": "PostOffice",
  "name": "Friendly Main Street Post Office",
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": 5
  }
}

export class SchemaOrgExamples {
  
  constructor() {
    // console.log(JSON.stringify(o));
    // result: {"@type":"CollegeOrUniversity","name":"TCD"}

    let o2: Organization = {
      "@type": "Corporation",
      "legalName": "IBM",
      location: "Main Street, Somewhere",
      "numberOfEmployees": { 
        "@type": "QuantitativeValue",
        "value": 100000
      } 
    };
    console.log(JSON.stringify(o2));
    /* result: 
      { 
        "@type":"Corporation",
        "legalName":"IBM",
        "location":"Main Street, Somewhere",
        "numberOfEmployees": { "@type":"QuantitativeValue","value":100000 }
      }
    */

    //console.log(JSON.stringify(c));
    /* result:
      {
        "@context":"https://schema.org",
        "@type":"PostOffice",
        "name":"Frienly Main Street Post Office",
        "aggregateRating":{"@type":"AggregateRating","bestRating":5}
      }
    */
    }
}
