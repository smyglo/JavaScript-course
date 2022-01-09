//Values and variables

// let country = 'Poland';
// let continent = 'Europe';
// let population = 38;

// console.log(country);
// console.log(continent);
// console.log(population);


// Data types

// let isIsland = false;


// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// // let, const and var

// const language = 'polish';

// // language = 'german';

// console.log(language);


// Basic operations

//1
// console.log(country + ' ' + 'population is' + ' ' + population / 2 + ' ' + 'milions.');

//2
// console.log(population + 1);

//3
// console.log(population > 6);

//4
// console.log(population < 33);

//5
// const description = country + ' ' + 'is in' + ' ' + continent + ' ' + 'and its' + ' ' + population + ' ' + 'milion people speak' + ' ' + language + ' ' + '.'
// console.log(description);



// String and Template literals

// const country = 'Poland';
// const continent = 'Europe';
// const population = 38;
// const language = 'polish';
// const description = `${country} is in ${continent} and its ${population} milion people speak ${language}.`;
// // // const description = country + ' ' + 'is in' + ' ' + continent + ' ' + 'and its' + ' ' + population + ' ' + 'milion people speak' + ' ' + language + ' ' + '.'
// console.log(description);

// // Taking decisions - if/else statement

// const toLessPopulation = 33 - population;

// if (population > 33) {
//     console.log(`${country} population is above average.`)
// } else {
//     console.log(`${country} population is ${toLessPopulation} milion below average.`)
// }


// Equality numbers

// const numNeighbours = 1;

// if (numNeighbours === 1) {
//     console.log(`Only one border!`)
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`)
// } else
//     console.log(`No borders!`)


// const country = 'Poland';
// const continent = 'Europe';
// const population = 38;
// const isEnglish = false;
// const isIsland = false;

// if (population < 50 && isEnglish && !isIsland) {
//     console.log(`${country} is a perfect country for you!`)
// } else {
//     console.log(`Seek for another country 😥`)
// }


// The switch statement

// const language = `kupencja`;

// switch (language) {
//     case `chinese`:
//     case `mandarin`:
//         console.log(`MOST number of native speakers`);
//         break;
//     case `spanish`:
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case `english`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`Number 4`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log('Great language too 👼')
// }


// The conditional (ternary) operator

// const population = 38;
// const country = `Poland`;

// console.log(
//     `${country}'s population is ${population > 33 ? `above` : `below`} average.`
// );