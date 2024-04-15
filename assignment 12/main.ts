// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
    
let favoriteTransportation : Array<[ transport : string, brand: string ]> =[]

favoriteTransportation.push (["Car","Toyota"])
favoriteTransportation.push (["Bike","Honda"])
favoriteTransportation.push (["Cycle","Ducati"])

//console.log(favoriteTransportation);
// "i would like to own a honda motorcycle"
// using for each loop

favoriteTransportation.forEach(([transport,brand])=>

{console.log(`I would like to own a ${brand} ${transport}.`)}

);