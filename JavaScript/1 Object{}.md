# [Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

- [Object](#object)
  - [Construtor Object](#construtor-object)
  - [Inicializador Object](#inicializador-object)
    - [Iterando](#iterando)
  - [Métodos estáticos](#métodos-estáticos)
    - [Object.Keys](#objectkeys)
    - [Object.values](#objectvalues)
    - [Object.entries](#objectentries)
    - [Object.assign](#objectassign)
  - [Propriedades de atributos](#propriedades-de-atributos)
  - [Herança](#herança)

## [Construtor Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

```js
const person1 = new Object();
person1.name = 'Alice';
person1.age = 25;
person1.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}
```

## [Inicializador Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

```js
const person0 = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
```

```js
person0.greet()
person1.greet()
```

### [Iterando](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```js
for (let key in person0) {
    console.log(key, ': ', person0[key]);
}
```

## [Métodos estáticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)

### [Object.Keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

retorna um [``array``](./0%20Array[].md) com as ``[keys]``

```js
console.log('keys: ', Object.keys(person0));
```

### [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

retorna um [``array``](./0%20Array[].md) com o ``valor``

``` js
console.log('values:', Object.values(person0))
```

### [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

retorna os pares de ``[key, value]``

```js
console.log('keys and values:', Object.entries(person0))
```

### [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

- Copia os Valores de [``objetos``](./1%20Object{}.md) para o ``objeto destino``

```js
const cityInfo = { city: 'Recife' }
console.log(Object.assign({}, person0, cityInfo))
```

## [Propriedades de atributos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

- [``value``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#value): Valor da propiedade
- [``writable``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#writable): Pode ser alterado
- [``enumerable``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#enumerable): Aparece em iterações
- [``configurable``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable): Pode ser deletada ou modificada

```js
Object.defineProperty(person0, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
```

## [Herança](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#classes_and_constructors)

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, my name is ', this.name);
    }
}
const alice = new Person('Alice', 25);
alice.greet();
```
