


=================
The schema.org types can be represented in a number of ways, including JSON-LD (which is the format Google recommends). 


If you are planning to offer you app to work offline (e.g. a sometimes connected PWA app) then it is vital that your data format can also work offline (without connection to SQL databases or file stores in the cloud). JSON-LD also helps here, as the JSON-LD document can be edited offline and stored on the mobile device in IndexedDB; later when the device connects to the Internet, the locally stored document can be synced with the cloud.

Even Apple recommends it: 
  "use standards-based markup for structured data, such as that defined at Schema.org. "
  https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/WebContent.html
