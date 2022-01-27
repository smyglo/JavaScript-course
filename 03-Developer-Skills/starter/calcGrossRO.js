'use-strict';

const calcGros = function (nett) {
  return nett * 0.19 + nett;
};

// console.log(calcGros(nett));

const values = [824.99, 149.99, 149.99];
const gross = [];

for (let i = 0; i < values.length; i++) {
  gross.push(calcGros(values[i]));
}

console.log(gross);

const sumGross = function (grossValues) {
  let sum = 0;
  for (i = 0; i < grossValues.length; i++) {
    sum += grossValues[i];
  }
  return sum;
};

// First way - (nett to gross1) + (nett to gross2) = invoiceValue
console.log(sumGross(gross));

// Second way - (net1  + nett2) to gross = invoiceValue )
const sumNett = sumGross(values);
console.log(calcGros(sumNett));
