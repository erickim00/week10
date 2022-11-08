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

