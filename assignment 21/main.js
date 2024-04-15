"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Function to create a fruit object
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste
    };
}
// Create an array of fruits
const fruits = [
    createFruit("Apple", "Red", "sweet"),
    createFruit("Banana", "Yellow", "sweet"),
    createFruit("Orange", "Orange", "sweet"),
    createFruit("Mango", "Green", "sweet"),
    createFruit("Pineapple", "Red", "sweet"),
    createFruit("Grapes", "Green", "sweet"),
];
// Access an invalid index
const invalidIndex = 10;
// there are only 5 ellements in the array, so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
//print the fruits
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name},Color: ${fruit.color},Taste: ${fruit.taste}`);
});
