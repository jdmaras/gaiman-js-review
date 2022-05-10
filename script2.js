/*
OBJECT - or Encapsulation
*/

let person = {
  // property: value
  // key: value
  thirdName: "Steve",
  fourthName: "Scuba",
  isAPerson: true,
};
// dot-notation
console.log("third name is", person.thirdName);
//                             "Steve"
console.log("fourth name is", person.fourthName);
//                                 "Scuba"
//if true
if (person.isAPerson) {
  console.log("lecture time");
}

person.hobbies = ["guitar", "harmonica", "swim", "mushroom farming"];
person.heightInInches = 69;
console.log(`Person, with changes: `, person);

//can change your object in the array with this "."
person.thirdName = "Evil Steve";
console.log(`Person with more changes: `, person);

function updatePerson(property, newValue) {
  // property = `heightInInches`
  // newValue = 70
  person[property] = newValue;
  // person [`heightInInches`] = 70
  // syntax for setting height properties
}
// property    new value
updatePerson(`heightInInches`, 70);
updatePerson(`middleName`, "Maximus");
//adding in a string like a middle name

console.log(`Updated the person: `, person);
console.log(`updated in height: `, person["height"]);


let notHobbies = [
    {
        name: 'guitar',
        yearsExperience: 2,
        moneySpent: 1000
    }
    {
        name: 'mushroom farm',
        yearsExperience: 4,
        moneySpent: 800
    }
    {
        name: 'cattle wrangling',
        yearsExperience: 5,
        moneySpent: 10000
    }
]
