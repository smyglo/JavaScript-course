'use strict';

// let hasDriversLicence = false;

// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log(`I can drive`);

// const interface = `Audio`;
// const private = 123;
// const if = forbidden;


// // Functions

// function logger() {
//     console.log(`My name is Mike`); // Function body
// };

// logger(); //Running/invoking/calling the function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`; // - it is my change, for what const was made?
//     // const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     // return juice;
// }

// console.log(fruitProcessor(2, 3));

// const appleJiuce = fruitProcessor(5, 0);
// console.log(appleJiuce);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// Function declaraions vs. expressions

// Function declaration

// const age1 = calcAge1(1992);

// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear; // Expression which produce value
// }

// const age2 = calcAge2(1991);
// console.log(age2);

// // Arrow function
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1992, 'Michał'));
// console.log(yearsUntilRetirement(1989, 'Paweł'));



// Functions review

// const birthYear = 1992;
// const calcAge3 = 2022 - birthYear;

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement}.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} already retired.`);
//         return -1;
//     }

//     return `${firstName} retires in ${retirement} years.`
// }

// // console.log(yearsUntilRetirement(1950, 'Michał'));
// yearsUntilRetirement(1992, 'Michał');


// Arrays


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// //Instead of abobe we can store data in array

// const friends = ['Michael', 'Steven', 'Peter']; //  Index of the array is zero-based
// console.log(friends); // Array called literal syntax

// const y = new Array(1991, 1984, 2020);
// console.log(y);

// console.log(friends[0]); // Choosing data from array. Array are zero-based
// console.log(friends[2]);

// console.log(friends.length); // Gives number of elements inside the array
// console.log(friends[friends.length - 1]); // Display last value of the array <array_name.lenght is not 0 value

// friends[2] = 'Jay'; // Replacing element with new value
// console.log(friends[2]);

// // friends = ['Bob', 'Alice']; - cant be changed - whole array was declared before
// const firstName = 'Michał';
// const me = [firstName, 'Badzio', 2022 - 1992, 'tester', friends]; // We can have array within array
// console.log(me);


// // Excercise

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


/// Basic array operations

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Adds elements
let newLenght = friends.push('Jay'); // Adds element to the end of the array
console.log(friends);
console.log(newLenght);

newLenght = friends.unshift('John'); // Adds element to the beginning of the array.
console.log(friends);
console.log(newLenght);

// Remove elements

friends.pop(); // Remove the last element
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

const shifted = friends.shift();
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Jay'));


console.log(friends.includes('Steven'));
console.log(friends.includes('Jay'));

if (friends.includes('Steven')) {
    console.log(`You have a friend called Steven!`);
}