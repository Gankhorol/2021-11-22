const names = ["Bold", "Bat", "Navchaa"];
console.log(names[0]);
console.log(names[1]);

const bold1 = names[0];

const [x, y] = names;

console.log(x, y);

const person = {
    name: "Bold",
    age: 15,
    gender: "male",
    birthday: "1985-04-30",
    school: "Hobby",
    single: true,
    hobbies: ["basketball", "tennis", "hiking"],
};

const bd = "birthday";

console.log(person.name);
console.log(person["gender"]);
console.log(person[bd]);

const { school, hobbies } = person;

console.log(school, hobbies);
