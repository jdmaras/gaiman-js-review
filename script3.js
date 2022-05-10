let person = {
  // property: value
  // key: value
  isAnInstructor: true,
  lastName: "Schwartz",
  firstName: "Edan",
  // person.hobbies
  hobbies: [
    {
      //  person.hobbies [0]
      name: "guitar",
      //    person.hobbies[0].yearsExperience
      yearsExperience: 2,
      moneySpent: 1000,
    },
    {
      name: "mushroom farm",
      yearsExperience: 0.9,
      moneySpent: 800,
    },
    {
      name: "harmonica",
      yearsExperience: 3,
      moneySpent: 400,
    },
  ],
};
/*
Challenge 1:

console.log
    I've been doing guitar for 2 years
    I've been doing mushroom farm for 0.9 years
    I've been doing harmonica for 3 years

Challenge 3:

console.log:
    I have spent a total of $2200 on hobbies
*/

console.log(
  `I've been doing guitar for 2 years:`,
  person.hobbies[0].yearsExperience
);
console.log(
  `I've been doing mushroom farm for 0.9 years: `,
  person.hobbies[1].yearsExperience
);
console.log(
  `I've been doing harmonica for 3 years: `,
  person.hobbies[2].yearsExperience
);

// //2nd way
// let hobby = person.hobbies[0];
// console.log(`I've been doing ${hobby.name} for ${hobby.yearsExperience}`);

// //3rd Way
// for (let hobby of person.hobbies) {
//   console.log(`I've been doing ${hobby.name} for ${hobby.yearsExperience}`);
// }

let hobbies = person.hobbies; // array of object
let totalMoneySpent = 0;
for (let hobby of hobbies) {
  // hobby is object

  console.log(`money spent of hobby`, hobby.moneySpent);
  totalMoneySpent += hobby.moneySpent;
}
console.log(`totalMoneySpent`, totalMoneySpent);
//console.log(`moneySpent`, person.hobbies[0].moneySpent)
