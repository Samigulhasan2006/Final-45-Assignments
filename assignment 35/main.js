"use strict";
/*
 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
// Define a function that accepts a size and the text of a message that should be printed on the Shirt.
const make_shirt = (size, message) => {
    console.log(`Size: ${size}, Message:'${message}'`);
};
// call the function
let size = "medium";
let message = " Typescript coding with Sami";
make_shirt(size, message);
// directly call the function
make_shirt("Large", "Typescript coding");
