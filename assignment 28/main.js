"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Define the array of fruits
const favoriteFruits = ["apple", "orange", "banana"];
/// syntex: arrayName.includes("element")
// Check for specific fruits using independent if statements
if (favoriteFruits.includes(" Apple ")) {
    console.log(" I like apples!");
}
if (favoriteFruits.includes(" Banana ")) {
    console.log(" I enjoy bananas!");
}
if (favoriteFruits.includes(" Orange")) {
    console.log(" Orange are delicious!");
}
if (favoriteFruits.includes(" grape ")) {
    console.log(" Grapes are tasty!");
}
if (favoriteFruits.includes(" mango ")) {
    console.log("Mangoes are one if my favorites!");
}
