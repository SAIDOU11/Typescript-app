type Address = { street: string; city: string; country: string };

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 main",
    city: "Ucity",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jill",
  age: 52,
  isStudent: false,
};

console.log(person1);
console.log(person2);

const peopleArr: Person[] = [person1, person2];
console.log(peopleArr);

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);

let ages: number[] = [100, 101];
console.log(ages);
