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
//     neighbours: ['Germany', 'the Czech Republic', 'Russia', 'Lithuania', 'Ukraine', 'Latvia', 'Slovakia']
// }

// // Dot vs. bracket notation

// // 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// // and a capital called Helsinki.'

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

