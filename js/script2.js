"use strict";
// ASSIGNMENT #9
console.log("ASSIGNMENT #9");

// let valuesOfArray
let newArray = [];
function getExtremeElements(array) {
  const lastElementIndex = array.length - 1;

  // Method #1
  //   valuesOfArray = `${array[0]} ${array[lastElementIndex]}`.split(" ");
  //   return valuesOfArray;

  // Method #2
  const valuesOfArray2 = `${newArray.unshift(array[0])}, ${newArray.push(
    array[lastElementIndex]
  )}`;
  return newArray;
}

getExtremeElements(["apple", "peach", "pear", "banana"]);
console.log(newArray);

// ASSIGNMENT #10
console.log("ASSIGNMENT #10");

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return console.log(words);
}

splitMessage("Mango hurries to the train", " ");

// ASSIGNMENT #11
console.log("ASSIGNMENT #11");

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let totalCost;
  totalCost = message.split(" ").length * pricePerWord;
  return console.log(totalCost);
  // Change code above this line
}

calculateEngravingPrice("JavaScript is in my blood", 10);

// ASSIGNMENT #12
console.log("ASSIGNMENT #12");

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);

  // Change code above this line
  return console.log(string);
}

makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// ASSIGNMENT #13
console.log("ASSIGNMENT #13");

function slugify(title) {
  // Change code below this line
  let slug = title.split(" ").join("-").toLowerCase();
  return console.log(slug);
  // Change code above this line
}
slugify("Arrays for begginers");

// ASSIGNMENT #14
console.log("ASSIGNMENT #14");

const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls, nonExtremeEls, lastThreeEls);

// ASSIGNMENT #15
console.log("ASSIGNMENT #15");

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line
console.log(allClients);

// ASSIGNMENT #16
console.log("ASSIGNMENT #16");

// Method #1

/*
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let arrays = firstArray.concat(secondArray);
  let newArray = [];
  if (maxLength < arrays.length) {
    for (let i = 0; i < maxLength; i++) {
      newArray.push(arrays[i]);
    }
    return console.log(newArray);
  } else {
    return console.log(arrays);
  }

  // Change code above this line
}
*/

// Method #2

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let arrays = firstArray.concat(secondArray);

  if (maxLength < arrays.length) {
    arrays = arrays.slice(0, maxLength);
  }
  return console.log(arrays);
  // Change code above this line
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

// ASSIGNMENT #17
console.log("ASSIGNMENT #17");

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

// ASSIGNMENT #18
console.log("ASSIGNMENT #18");

function calculateTotal(number) {
  // Change code below this line
  let sumOfIntegers = (number * (1 + number)) / 2;
  return console.log(sumOfIntegers);
  // Change code above this line
}
calculateTotal(7);

// ASSIGNMENT #19
console.log("ASSIGNMENT #19");

const fruits2 = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits2.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// ASSIGNMENT #20
console.log("ASSIGNMENT #20");

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i++) {
    total = order[i] + total;
  }
  // Change code above this line
  return console.log(total);
}

calculateTotalPrice([12, 85, 37, 4]);

// ASSIGNMENT #21
console.log("ASSIGNMENT #21");

function findLongestWord(string) {
  // Change code below this line
  let arrayOfString = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < arrayOfString.length; i++) {
    if (longest < arrayOfString[i].length) {
      longest = arrayOfString[i].length;
      word = arrayOfString[i];
    }
  }
  return console.log(word);
}
// Change code above this line

findLongestWord("The quick brown fox jumped over the lazy dog");

// ASSIGNMENT #22
console.log("ASSIGNMENT #22");

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  // Change code above this line
  return console.log(numbers);
}

createArrayOfNumbers(1, 3);

// ASSIGNMENT #23
console.log("ASSIGNMENT #23");

function filterArray(numbers, value) {
  // Change code below this line
  let greaterThanValue = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      greaterThanValue.push(numbers[i]);
    }
  }
  return console.log(greaterThanValue);
  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3);

// ASSIGNMENT #24
console.log("ASSIGNMENT #24");

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("plum"));

// ASSIGNMENT #25
console.log("ASSIGNMENT #25");

function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
  if (array1.length >= array2.length) {
    for (let i = 0; i < array2.length; i++) {
      if (array1.includes(array2[i])) {
        newArray.push(array2[i]);
      }
    }
  } else if (array1.length < array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
  // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// ASSIGNMENT #26
console.log("ASSIGNMENT #26");

function calculateTotalPrice2(order) {
  let total = 0;
  // Change code below this line

  for (let value of order) {
    total += value;
  }
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice2([12, 85, 37, 4]));

// ASSIGNMENT #27
console.log("ASSIGNMENT #27");

function filterArray2(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}
console.log(filterArray2([1, 2, 3, 4, 5], 3));

// ASSIGNMENT #28
console.log("ASSIGNMENT #28");
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

console.log(a, b, c, d, e);

// ASSIGNMENT #29
console.log("ASSIGNMENT #29");

function getEvenNumbers(start, end) {
  // Change code below this line
  let arrayNumbers = [];
  let newArray = [];
  for (let i = start; i <= end; i++) {
    arrayNumbers.push(i);
  }
  for (let number of arrayNumbers) {
    if (number % 2 === 0) {
      newArray.push(number);
    }
  }

  return newArray;
  // Change code above this line
}
console.log(getEvenNumbers(2, 5));

// ASSIGNMENT #30
console.log("ASSIGNMENT #30");
const start2 = 6;
const end2 = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);

// ASSIGNMENT #31
console.log("ASSIGNMENT #31");

function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  // Change code above this line
}
console.log(findNumber(6, 9, 4));

// ASSIGNMENT #32
console.log("ASSIGNMENT #32");

function includes(array, value) {
  // Change code below this line
  let arrayBoollean;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      arrayBoollean = true;
      break;
    } else {
      arrayBoollean = false;
    }
  }
  return arrayBoollean;
  // Change code above this line
}

console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
