"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const bouquet = {
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangment of spring flowers"
};
// define an array of objects
let bouquets = [];
// pushing multiple object
bouquets.push(bouquet);
bouquets.push({
    name: "Summer bliss",
    price: 350,
    description: "Beautiful arrangment of summer flowers"
});
let bouquet3 = {
    name: "Red Hot",
    price: 350,
    description: "Beautiful arrangment of red hot"
};
bouquets.push(bouquet3);
console.log(bouquets);
bouquets.push({ name: "Freshness", price: 250, description: "A beautiful arrangment of white and yellow roses" });
//console.log(bouquets);
// function to display bouquets
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
        title: ${i.name}
        description: ${i.description}
        price: ${i.price}
        _______________\n`);
    }
}
displayBouquets(bouquets);
