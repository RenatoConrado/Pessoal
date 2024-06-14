# [Sintax do Array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

- [Sintax do Array](#sintax-do-array)
  - [Array Dinâmico](#array-dinâmico)
  - [Construtor](#construtor)
  - [Adicionar e Remover](#adicionar-e-remover)
    - [Adicionar e remover do final](#adicionar-e-remover-do-final)
    - [Adicionar e remover do inicio](#adicionar-e-remover-do-inicio)
  - [Concatenar](#concatenar)
  - [Fatiar](#fatiar)
  - [forEach](#foreach)
  - [map](#map)
  - [Filtrar](#filtrar)
  - [Reduzir](#reduzir)
  - [Procurar Elemento](#procurar-elemento)
  - [Procurar Index](#procurar-index)
  - [Iteração Avançada](#iteração-avançada)
  - [Ordenação](#ordenação)
    - [Crescente](#crescente)
    - [Decrescente](#decrescente)
    - [Inverter](#inverter)
  - [Multidimensional](#multidimensional)

## [Array Dinâmico](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#creating_arrays)

```js
const dynamic = [];
```

## [Construtor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)

```js
const static = new Array();
```

## [Adicionar](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#adding_items) e [Remover](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#removing_items)

### [Adicionar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) e [remover](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) do final

```js
static.push('a', 'b', 'c', 'd');
static.pop(); 
```

```js
['a', 'b', 'c']
```

### [Adicionar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) e [remover](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) do inicio

```js
dynamic.shift(1, 2, 3, 4);
dynamic.unshift();
```

```js
[2, 3, 4]
```

## [Concatenar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

```js
const concated = static.concat(dynamic)
```

```js
['a',' b', 2, 3, 4] 
```

## [Fatiar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

Retorna copia de valores

```js
const sliced = static.slice(0, 1)
```

```js
['a', 'b']
```

## [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

executa uma função para cada elemento

```js
static.forEach(   
    element => console.log(element)
)
```

```js
'a'
'b'
'c'
```

## [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Retorna novo array com resultado de uma função para cada elemento

```js
const doubled = dynamic.map(
    x => x * 2
);
```

```js
[4, 6, 8]
```

## [Filtrar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Retorna novo array para os elementos que passarem em uma condição

```js
const evens = dynamic.filter(
    x => { x % 2 === 0 }
);
```

```js
[2, 4]
```

## [Reduzir](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Aplica uma [``função``](./2%20Function().md) a um ``acumulador`` e a cada [``elemento do array``](./0%20Array[].md), resultando em um único valor.

```js
const sum = dynamic.reduce(
    (accumulator, currentValue) => { accumulator + currentValue }, 0
) 
```

```js
[15]
```

## [Procurar Elemento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Retorna o primeiro elemento que satifaz a condição

```js
const element = dynamic.find( x => x > 3 );
```

```js
[4]
```

## [Procurar Index](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

Retorna o ÍNDICE do primeiro elemento que satifaz a condição.

```js
const index = static.findIndex( x => x > 3 );
```

```js
[3]
```

## Iteração Avançada

despoirs eu escrevo sobre [``.every``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) e [``.some``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Ordenação

### [Crescente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
dynamic.sort()
```

### [Decrescente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters)

```js
dynamic.sort(
    (a, b) => b - a
)
```

### [Inverter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

```js
dynamic.reverse();
```

```js
[3, 2, 1]
```

## [Multidimensional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#creating_a_two-dimensional_array)

```js
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix[1][2])
```

Linha 2 e Coluna 3

```js
[6]
```
