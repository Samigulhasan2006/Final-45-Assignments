"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = [
    " SAMI",
    " FURQAN ",
    " Hashir ",
    " Muhammad Ali",
];
//step 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
//step 2 add one new guest to the beginning of your array.
let newGuestAtBeginning = "Irfan ";
guestList.unshift(newGuestAtBeginning);
// console.log(guestList)
// 3rd step add one guest to the middile of array
let newGuestInMiddle = "Adnan";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// console.log(guestList)
// 4th step use append() to add new guest to the end of your list 
let newGuestAtEnd = "wasif";
guestList.push(newGuestAtEnd);
// console.log(guestList)
// Final step Print a new set of invitation messages
for (let guest of guestList) {
    console.log(`Dear ${guest}, You are invited to dinner`);
}
