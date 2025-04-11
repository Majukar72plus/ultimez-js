let names = ["John", "Jane", "Doe", "Alice", "Bob"];
console.log("Original names:");
names.forEach(name => console.log(name));
names.push("Eve");
let index = names.indexOf("Doe");
if (index !== -1) {
    names.splice(index, 1);
}
names.sort();
if (names.includes("Alice")) {
    console.log("Alice is present");
} else {
    console.log("Alice is not present");
}
let uppercaseNames = names.map(name => name.toUpperCase());
console.log("Uppercase Names:");
uppercaseNames.forEach(name => console.log(name));
