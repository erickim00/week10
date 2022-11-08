alert("WARNING: ICBM MISSILES INCOMING")
console.log("RUN")

for (let i = 1; i <= 10; i++) {
    console.log(2**i)
}

let i =1;
while (i<=10) {
    console.log(2**i);
    i++;
}

let input = "";
do{
    input = prompt("What is your name?");
} while (!isNaN(Number(input)));
// console.log(input);

// alert("Welcome " + input)
alert(`Welcome ${input}`);

let fruits = ["Apple", "Banana"];
fruits.push("Kiwi");

fruits.pop();

fruits.unshift ("Mango");

fruits.shift()

for (let i = 0; i<fruits.length; i++)
{
    console.log(fruits[i])
}

for (let item of fruits)
{
    console.log(item);
}

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
}

console.log(`My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]}.`)

for (let prop in person)
{
    console.log(`My ${prop} is ${person[prop]}`)
}

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];

for(let stud of students)
{
    if (stud.program === "CIT" && stud["GPA"] > 3)
    console.log(stud)
}