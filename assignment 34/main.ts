/*
 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
     • Modify your program to print a statement about each animal, such as A dog would make a great pet.
     • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

// List of animals with a common characteristic
const animals: string[] = ['Cat', 'Dog', 'Goat'];

// Printing the names of each animal using a for of loop

console.log("List of animals:");
for (const i of animals) {
    console.log(i);
}

// Printing a statement about each animal
console.log("\n Statements about each animal:");

for (const animal of animals) {
    if (animal === 'Dog') 
        {
            console.log(` A ${animal} is a great pet.`)
        } 
    else if (animal === 'Cat')
        {
            console.log(` A ${animal} would be a good companion at home.`);
        }
     else if(animal === 'Goat' )
        {
            console.log(`A ${animal} is an adorable pet that also give us milk.`)
        }
}

// common characteristic
console.log("\n What these animals have in common:");
console.log("Any of these animals could be a great pet!");