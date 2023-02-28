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
