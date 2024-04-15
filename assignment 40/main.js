"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
// Array of magician's names
const magicianNames = ["Harry porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbleledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const items of magicians) {
        console.log(items);
    }
}
// Call the funcion to show the magician's names
show_magicians(magicianNames);
