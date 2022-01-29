// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

// Should it be one string? - Yes ok
// How to return date in string? - done
//  How to coinstruct funbction to make exporession in one string?

//  "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// const temperatures = [17, 21, 23];
// const temperatures2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let day = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     day++;
//     // console.log(`...${temp}ºC in ${day} days`);

//     let data = {
//       temp: arr[i],
//       day: day,
//     };
//     console.log(`...${data.temp}ºC in ${data.day} days`);
//   }
// };

// printForecast(temperatures2);

// 1) Understanding the problem
//  -Array transformed to string, separated by '...'
// - What is the x days | index + 1 ; day + 1

// 2) Breaking into sub-problem
// - Transform array into the string
// - Transform each element into string with 'ºC'
// - String needs to contain day (index + 1)
// - add '...' between, at start and end of the string

// const temperatures = [17, 21, 23];
// const temperatures2 = [12, 5, -5, 0, 4];

// // `${temperatures[i]}ºC in temperatures.`;

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} day ... `;
//   }
//   console.log('... ' + str);
// };

// printForecast(temperatures);
