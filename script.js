const name = "John";
const age = 25;
const sentence = `Hey it's ${name} and he is ${age} years old. `;
console.log(sentence);

// String Chellenge

function fullName(firstName, lastName) {
  let result = `${firstName} ${lastName}`;
  return result.toUpperCase();
}
console.log(fullName("Shola", "Nurlanova"));
console.log(fullName("Nurlanova", "Shola"));

let names = ["john", "boob", "josh", "ben", "adilet"];

// length
console.log(names.length);
console.log(names[names.length - 1]);

// concat

const lastName = ["pepper", "onion", "alma", "perez"];
const allNames = names.concat(lastName);
console.log(allNames);
console.log(allNames.reverse());

// unshift - adds to beginning of the array
allNames.unshift("Kate");
console.log(allNames);

// shift - removing the first item from array
console.log(allNames.shift());
console.log(allNames.shift());
console.log(allNames.shift());

// splice - mutates original array
const spesNames = allNames.splice(2, 1);
console.log(spesNames);
