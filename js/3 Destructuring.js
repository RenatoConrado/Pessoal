// ARRAY
const [first, , ...rest] = [1, 2, 3, 4];
// first == 1
// rest  == [3, 4]

// OBJECT
const person1 = { 
    name: 'alice', 
    age: 25, 
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
}

function greet({ name: username, age = 20 }) {
    console.log(`my name is ${username} and I am ${age} years old.`);
}

const person2 = { name: 'Bob', age: 30 };

greet(person1);
greet(person2);

// TROCA DE VARIAVEIS

var a = 1;
var b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

