// Valuse and variables

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonasMatilda = 'JM';
// let $function = 27;

// let person = 'jonas';

// console.log(person);
// let PI = 3.1415;

// //Correct
// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// //Incorrect
// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// let javascriptIsFun = true;



// Data types

// console.log(typeof javascriptIsFun);
// // console.log(typeof firstName);
// // console.log(typeof 23);

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// // console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);



// let, const, var

// let age = 30;
// // console.log(age);
// age = 31;
// // console.log(age);

// const birthYear = 1991;

// // const myName;
// // console.log(myName);

// var job = 'Programmer';
// // job = 'Coder';

// console.log(job);


// Arithmetic operators

// const now = 2037;
// const ageMike = now - 1992;
// const ageSarah = now - 2018;
// // console.log(ageMike, ageSarah);
// // console.log(ageMike * 2, ageMike / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Michał';
// const lastName = 'Badzio';

// // console.log(firstName + ' ' + lastName);

// // Assignment operators

// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++ // x = x + 1 = 101
// x-- // x = x - 1 = 100
// x-- // x = x - 1 = 99
// console.log(x);

// // Comparison operators

// console.log(ageMike > ageSarah); // > < >= <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;


// Operator precedence

// const now = 2037;
// const ageMike = now - 1992;
// const ageSarah = now - 2018;
// console.log(now - 1992 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //  x = 10, y = x where x is 10, so y = 10
// console.log(x, y);

// const averageAge = (ageMike + ageSarah) / 2;

// console.log(ageMike, ageSarah, averageAge);

// String and template literals

// const firstName = 'Michał';
// const job = 'Tester';
// const birthYear = 1992;
// const year = 2021;

// const michał = "I'm " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
// // console.log(michał);

// const michałNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(michałNew);

// console.log(`Just a regular string...`);

// console.log('Text with \n\
// new line')

// console.log(`Text
// with multiple
// lines`);


// If /else

// const age = 15;
// const isOldEnough = age >= 18;


// if (age >= 18) {
//     console.log(`Sarah can start driving licence 🚗`);

// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young 🚔 Wait another ${yearsLeft} years`);
// }

// const birthYear = 1992;
// let century = 20;

// if (birthYear <= 2000) {
//     console.log(century);
// }
// else {
//     century = 21;
//     console.log(century);
// }


// Conversions

// const inputYear = '1992';
// console.log(Number(inputYear));
// console.log(inputYear + 8);

// console.log(Number('Michał'));
// console.log(typeof NaN);

// console.log(String(28));
// console.log(typeof 28);

// // Coertions

// console.log("I'm " + 23 + " yeas old."); // coertion - 23 was coerted
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11' - string
// n = n - 1; // 11 - number
// console.log(n);


// Falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Michał'));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//     console.log(`Don't spend it all!`)
// } else {
//     console.log(`You should get a job!`);
// }

// let height = 123;

// if (height) {
//     console.log(`YEY! Height is defined!`)
// } else {
//     console.log(`Height is undefined`)
// }

// const age = '18';

// if (age === 18) console.log(`You just became adult (strict)`); //won't be converted
// if (age == 18) console.log(`You just became adult (loose)`); //will be converted

// const favourite = Number(prompt(`What is your favourite number?`));
// console.log(favourite);
// // console.log(typeof favourite);

// if (favourite === 23) {
//     console.log(`Cool! 23 is amazing number.`);
// } else if (favourite === 7) {
//     console.log(`Nice! 7 is also great number!`)
// } else if (favourite === 9) {
//     console.log(`Nice! 9 is also great number!`)
// }
// else {
//     console.log(`Number is not 23 or 7 or 9`)
// }

// if (favourite != 23) console.log(`Why not 23?`);

// const age = 15;
// const isOldEnough = age >= 18;


// if (age >= 18) {
//     console.log(`Sarah can start driving licence 🚗`);

// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young 🚔 Wait another ${yearsLeft} years`);
// }

// const hasDriverLicence = true //A
// const hasGoodVision = true //B
// const isTired = false; //C

// // console.log(hasDriverLicence && hasGoodVision);
// // console.log(hasDriverLicence || hasGoodVision);
// // console.log(!hasDriverLicence);

// if (hasDriverLicence && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`)
// }


// Swith statement

// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//     // break;
//     case `tuesday`: // day === `tuseday`
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend 🎉`);
//         break;
//     default:
//         console.log(`Not a valid day!`);
// }

// const day = `sunday`;

// if (day === `monday`) {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`Write code examples`);
// } else if (day === `friday`) {
//     console.log(`Record videos`)
// } else if (day === `saturday` || day === `sunday`) {
//     console.log(`Enjoy the weekend 🎉`)
// } else console.log(`Not a valid day!`)


// Statement and expressions

// 3 + 4 // This is expression, because it makes value, which will be 7
// 1992 // This is also expresion
// true && false && !false // Expression - at the end it will produce boolean valuse

// if (23 > 10) {
//     const str = `23 is bigger`;
// }

// console.log(`I'm ${2022 - 1992} years old.`)


// // Conditional (ternary) operators

// age = 18;

// // age >= 18 ? console.log(`I like to drink wine 🍷`) :
// //     console.log(`I like to drink juice 🧃`); // - instead of this chack below

// const drink = age >= 18 ? `wine 🍷` : `juice 🧃`; // This is an expression, which will produce value - it can be assigh to variable
// console.log(drink);

// // Compare it to the if/else statement below

// let drink2;

// if (age >= 18) {
//     drink2 = `wine 🍷`;
// } else {
//     drink2 = `juice 🧃`
// };


// console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `juice 🧃`} `)
