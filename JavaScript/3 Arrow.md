# [Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [Arrow Function Expressions](#arrow-function-expressions)
  - [Função Tradicional vs Arrow](#função-tradicional-vs-arrow)
    - [Tradicional](#tradicional)
    - [Arrow](#arrow)
  - [Quando Usar](#quando-usar)
    - [Métodos de array](#métodos-de-array)
    - [Callbacks](#callbacks)
  - [Quando Evitar](#quando-evitar)
    - [Métodos de objetos](#métodos-de-objetos)

## Função Tradicional vs Arrow

### [Tradicional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

```js
function add(a, b) {
    return a + b;
}
```

### [Arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#description)

```js
const adicao = (a, b) => a + b;
```

- Arrow functions não têm seu próprio [``this``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this),  elas herdam do escopo em que elas foram definidas.
- o valor de [``this``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) dentro de uma arrow function é o mesmo do contexto onde a função foi definida.
- Não podem ser usadas como construtores, operador [``new``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

## Quando Usar

### [Métodos](https://developer.mozilla.org/en-US/docs/Glossary/Method) de [array](./0%20Array[].md)

[``maps``](./0%20Array[].md#map), [``filter``](./0%20Array[].md#filtrar) e [``reduce``](./0%20Array[].md#reduzir).

```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
```

### Callbacks

passar uma [``função``](./2%20Function().md) como ``argumento``.

```js
setTimeout(() => {
    console.log('função como parametro');
}, 1000)
```

## [Quando Evitar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods)

### [Métodos de objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods)

Arrows são inadequadas quando precisam do seu próprio [``this``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

```js
const person = {
    name: 'Alice',
    greet: () => {
        console.log(`hello, my name is ${this.name}`);
    }
}
```

[``this``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) não se refere ao objeto ``person``.
