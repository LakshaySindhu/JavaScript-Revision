// console.log(window); -> undefined in node environment

// window is global object in browser 
// window object respresents a open window in browser
// If a document contains <iframe> then, the browser creates one window object for the html document and one additional window object for each iframe

// console.log(window); // will return the global window object and its properties

// console.log(window.document); // and console.log(document) are same

// console.log(document); -> undefined in node environment

// console.log(window.document); // -> returns the html docuemnt
// If you need to know more details about document like that were mentioned in document property of window object then use the below method

// console.dir(document);

// DOM Diagram Link : https://excalidraw.com/#json=SmmtwE5arfrkfYdv4BYrp,dplZu-1s7m45o0dE0zEsYA

// console.log(document.baseURI);
// console.log(document.links);

// HTMLCollection, NodeCollection all are different
// These collections needs to be converted to arrays to perform various operations 



// document.getElementById('firstHeading');

// document.getElementById('firstHeading').innerHTML = "<h1>Lakshay Sindhu</h1>";

