// ASSIGNMENT 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// unstriped variable
var personNameUnstriped = "\n\tOmer \t";
// striped variable
var personNameStriped = "\n\tOmer \t";
// printing unstriped version
console.log("\nBefore Striping:");
console.log(personNameUnstriped);
// printing striped version
console.log("\nAfter Striping:");
console.log(personNameStriped.trim());
