const num = Number.parseInt(Math.random() * 100);
let type = num % 2 === 0 ? "even" : "odd";

console.log(`${num} is ${type}`);