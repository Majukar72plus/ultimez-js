
function Person(name, age, gender, occupation) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.occupation = occupation;
}

const person1 = new Person("Alice", 28, "Female", "Engineer");
const person2 = new Person("Bob", 32, "Male", "Doctor");

// Print out details
console.log("Person 1:", person1);
console.log("Person 2:", person2);


function createUniqueSet(arr) {
  return new Set(arr);
}
console.log("Unique Set:", createUniqueSet([1, 2, 2, 3, 4, 4, 5]));


function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}

function difference(setA, setB) {
  return new Set([...setA].filter(x => !setB.has(x)));
}

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

console.log("Union:", union(set1, set2));
console.log("Intersection:", intersection(set1, set2));
console.log("Difference:", difference(set1, set2));


function isSubset(subset, set) {
  for (let elem of subset) {
    if (!set.has(elem)) return false;
  }
  return true;
}

const subset = new Set([1, 2]);
const mainSet = new Set([1, 2, 3, 4]);

console.log("Is Subset:", isSubset(subset, mainSet));



const myMap = new Map();


myMap.set("name", "Charlie");
myMap.set("age", 30);
myMap.set("job", "Designer");

console.log("Name:", myMap.get("name"));

myMap.set("age", 31);
console.log("Updated Age:", myMap.get("age"));

myMap.delete("job");

console.log("Final Map:", myMap);
