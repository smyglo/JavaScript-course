'use strict';


// Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
// }

// const Poland = describeCountry('Poland', 38, 'Warsaw');
// const Germany = describeCountry('Germany', 83, 'Berlin');
// const Russia = describeCountry('Russia', 144, 'Moscow');

// console.log(Poland, Germany, Russia);


// Functions declarations and expressions


// function percentageOfWorld1(country, population) {
//     const countryPercentage = population / 7900 * 100;
//     return `${country} has ${population} milion people, so it's about ${countryPercentage}% of the worlds population.`;
// }


// const percentagePoland = percentageOfWorld1('Poland', 38);
// console.log(percentagePoland);

// const percentageGermany = percentageOfWorld1('Germany', 83);
// console.log(percentageGermany);

// const percentageRussia = percentageOfWorld1('Russia', 144);
// console.log(percentageRussia);

// Function expression

// const percentageOfWorld2 = function (country, population) {
//     const countryPercentage = population / 7900 * 100;
//     return `${country} has ${population} milion people, so it's about ${countryPercentage} of the worlds population.`;
// }

// const percentagePoland2 = percentageOfWorld2('Poland', 38);
// console.log(percentagePoland);

// const percentageGermany2 = percentageOfWorld2('Germany', 83);
// console.log(percentageGermany);

// const percentageRussia2 = percentageOfWorld2('Russia', 144);
// console.log(percentageRussia);

// Arrow function

// const percentageOfWorld3 = population => population / 7900 * 100;

// const percentagePoland3 = percentageOfWorld3(38);
// const percentageGermany3 = percentageOfWorld3(83);
// const percentageRussia3 = percentageOfWorld3(144);

// console.log(percentagePoland3, percentageGermany3, percentageRussia3);


// Introduction to arrays

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
// }

// const Poland = describeCountry('Poland', 38, 'Warsaw');
// const Germany = describeCountry('Germany', 83, 'Berlin');
// const Russia = describeCountry('Russia', 144, 'Moscow');
// const Brittan = describeCountry('Brittan', 67, 'London');

// function percentageOfWorld1(population) {
//     const countryPercentage = population / 7900 * 100;
//     // return `${country} has ${population} milion people, so it's about ${countryPercentage}% of the worlds population.`;
//     return countryPercentage;
// }

// const populations = [48, 83, 144, 67];
// console.log(populations.length === 4);

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// console.log(percentages);


// Basic array operations (methods)

// const neighbours = ['Germany', 'Slovakia', 'Czech Republic', 'Lithuania', 'Belarus', 'Ukraine', 'Russia'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log(`Probably not a central European country :)`);
// } else console.log(`It is an European country :)`);

// console.log(neighbours.indexOf('Czech Republic'));

// neighbours[2] = 'the Czech Republic';
// console.log(neighbours);


// Intro to objects

// const myCountry = {
//     country: 'Poland',
//     capital: 'Warsaw',
//     language: 'polish',
//     population: 38,
//     neighbours: ['Germany', 'the Czech Republic', 'Russia', 'Lithuania', 'Ukraine', 'Latvia', 'Slovakia'],

//     percentageOfWorld1: function () {
//         this.countryPercentage = this.population / 7900 * 100;
//         return this.countryPercentage;
//     },

//     describe: function () {
//         return `${this.country} has a ${this.population} milion, so it's about ${this.percentageOfWorld1()}% of the worlds population. ${this.country} has ${this.language}-speaking people and ${this.neighbours.length} neighbouring countries. Capital of ${this.country} is ${this.capital}.`
//     },

//     checkIsIsland: function () {
//         // this.isIsland = this.neighbours.length === 0 ? true : false;
//         this.isIsland = !Boolean(this.neighbours.length);
//         return this.isIsland;
//     },
// }

// console.log(myCountry.describe());
// console.log(myCountry.checkIsIsland());
// console.log(myCountry);
// console.log(myCountry.neighbours.length);





// // Dot vs. bracket notation

// // 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// // and a capital called Helsinki.'

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);



// Object methods

// const myCountry = {
//     country: 'Poland',
//     capital: 'Warsaw',
//     language: 'polish',
//     population: 38,
//     neighbours: ['Germany', 'the Czech Republic', 'Russia', 'Lithuania', 'Ukraine', 'Latvia', 'Slovakia'],

//     percentageOfWorld1: function () {
//         this.countryPercentage = this.population / 7900 * 100;
//         return this.countryPercentage;
//     },

//     describe: function () {
//         return `${this.country} has a ${this.population} milion, so it's about ${this.percentageOfWorld1()}% of the worlds population. ${this.country} has ${this.language}-speaking people and ${this.neighbours.length} neighbouring countries. Capital of ${this.country} is ${this.capital}.`
//     },

//     checkIsIsland: function () {
//         // this.isIsland = this.neighbours.length === 0 ? true : false;
//         this.isIsland = !Boolean(this.neighbours.length);
//         return this.isIsland;
//     },
// }

// console.log(myCountry.describe());
// console.log(myCountry.checkIsIsland());
// console.log(myCountry);
// console.log(myCountry.neighbours.length);


// For loop

// for (let voter = 1; voter <= 50; voter++) {

//     console.log(`Voter number ${voter} is currently voting`);
// }


// Looping arrays, breaking and continuing

// Old way

// function percentageOfWorld1(population) {
//     const countryPercentage = population / 7900 * 100;
//     // return `${country} has ${population} milion people, so it's about ${countryPercentage}% of the worlds population.`;
//     return countryPercentage;
// }

// const populations = [48, 83, 144, 67];

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// console.log(percentages);


// // Loop way

// // const populations = [48, 83, 144, 67];

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     // percentages2.push(percentageOfWorld1(populations[i])); // - my way
//     const perc = (percentageOfWorld1(populations[i]));
//     percentages2.push(perc);
// }

// console.log(percentages2);

// if (percentages == percentages2) {
//     console.log('Yey!')
// } else console.log('Nope');


// Looping backwards

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`)



// console.log(listOfNeighbours);

// neighbour:x

// for (let neighbourSet = 0; neighbourSet < listOfNeighbours.length; neighbourSet++) {
//     console.log(`Set ${neighbourSet + 1}`)

//     for (let neighbour = 0; neighbour < listOfNeighbours[0].length; neighbour++) {
//         console.log(`Neighbour: ${listOfNeighbours[0]}`);
//     }
// }


// The while loop

// const populations = [48, 83, 144, 67];

// const percentages3 = [];

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;

//     // for (let i = 0; i < populations.length; i++) {
//     //     const perc = (percentageOfWorld1(populations[i]));
//     //     percentages2.push(perc);
// }
// let i = 0;
// while (i < populations.length) {
//     const perc = (percentageOfWorld1(populations[i]));
//     percentages3.push(perc);
//     i++;
// }

// console.log(percentages3);