const array=[10,5,8,3,12,6]
console.log(array.length)
console.log(array.push(7))
console.log(array.shift())
console.log(array.sort(function(a, b){return a-b}))
console.log(array.toReversed())
 console.log(array.includes(8))
 if (array.includes(8)){
    console.log("number 8 is exists")
 }else(console.log("number 8 is not exists"))
 console.log(array.indexOf(12));
 let doubledNumbers = array.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);