"use strict";
// ASSIGNMENT 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favTransportation = ["Honda Civic", "Toyota Corolla", "Mercedes Benz", "Audi"];
// .map brings all names or list of that array which you used with. The names of cars which we brought is stored in cars which acts as variable then we print all of them at once.
favTransportation.map((cars) => console.log(`I would like to own a ${cars}.`));
