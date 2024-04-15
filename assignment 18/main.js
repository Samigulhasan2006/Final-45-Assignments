"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//importing guests list from Exercise 15
let guestList = [
    " SAMI's Mother ROSHAN",
    " FURQAN ",
    " HAJRA  ",
    " MARYAM ",
];
// step 1. print the name of person who can't make it
let guestwhocantmakeit = "FURQAN";
console.log(`${guestwhocantmakeit} can't make it to dinner`);
// step 2. replace the name of person who can't make it 
let NewGuest = " Adnan ";
let indexOfguestwhocantmakeit = guestList.indexOf(guestwhocantmakeit);
if (indexOfguestwhocantmakeit !== -1) {
    guestList[indexOfguestwhocantmakeit] = NewGuest;
}
// step 3.print a second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, You invited to dinner.`);
});
console.log(`\n Printing message indicating number of guests`);
console.log(`We hade finally invited ${guestList.length}guest in Exercise 15.`);
