height = 111;
const person = {
    name: "Pujal",
    age: 20,
    height,       //we can use global/local variables
};

// const {name, age, height} = person;
// person.height = 21;

console.log(person.height);


const person2 = {...person, name: "GoluDon"};             // use of spread operator {...} (copies everything as it is).
