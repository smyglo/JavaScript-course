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

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`; // - it is my change, for what const was made?
    // const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    // return juice;
}

console.log(fruitProcessor(2, 3));

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