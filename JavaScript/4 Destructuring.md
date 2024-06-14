# [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

- [Destructuring Assignment](#destructuring-assignment)
  - [Array](#array)
  - [Object](#object)
  - [Troca de Variaveis](#troca-de-variaveis)

## [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring)

```js
const [first, , ...rest] = [1, 2, 3, 4];
```

```js
 first == 1
 rest  == [3, 4]
```

## [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)

```js
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
```

```js
`my name is alice and I am 25 years old.`
`my name is Bob and I am 30 years old.`
```

## Troca de Variaveis

```js
var a = 1;
var b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
```

```js
a = 2
b = 1
```
