// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = birthYear => 2022 - birthYear;

// console.log(calcAge(1992));

// Using Google, StackOverflow and MDN

// PROBLEM 1:

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// #1 Understanding the problem
// - What is temperature amplitude?
//  Answer: difference between higfhes and lowest temp
// - How to compute max and min temp?
// - What is a sensor error? What to do when it occurs?
//  Answers: Ignore the error, it is string: 'error'

// #2 Breaking the problem into smaller sub-problems
//  - How to ignore errors?
//  - Find max value in the temp array
//  - Find min value in the temp array
//  - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     if (max < currTemp) max = currTemp;
//     if (min > currTemp) min = currTemp;
//   }
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2

// // Function should recieve two arrays of temperatures
// // #1 Understanding the problem
// // - With two arrays should we implement functionality twice?
// // Answer: NO. Just merge two arrays.

// // #2 Breaking the problem into smaller sub-problems
// // - How to merge two arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     if (max < currTemp) max = currTemp;
//     if (min > currTemp) min = currTemp;
//   }
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 6, -10], [1, 10, 111]);
// console.log(amplitudeNew);
