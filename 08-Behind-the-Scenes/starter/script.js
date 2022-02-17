'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName} - you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new viarable with the same name name as outers scopes viarables
      const firstName = 'Jonas';
      // Reassigning outer scpoe's viarable
      output = 'NEW OUTPUT';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(output);
    // console.log(add(2, 3)); - won't work at strict mode
    console.log(millenial);
    // console.log(str); - won't work outside of the block
  }

  printAge();
  return age;
}

const firstName = 'Mike';
calcAge(1992);
