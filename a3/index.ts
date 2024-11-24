// ASSIGNMENT 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "Muhammad Omer";
// Lower Case
console.log(personName.toLowerCase());

// Upper Case
console.log(personName.toUpperCase());

// Title Case
console.log(`${personName.charAt(0).toUpperCase()}${personName.slice(1)}`);