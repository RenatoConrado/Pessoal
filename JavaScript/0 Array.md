# Sintax do Array

- [Sintax do Array](#sintax-do-array)
  - [Array dinamico](#array-dinamico)
  - [Construtor (adiciona espaços vazios)](#construtor-adiciona-espaços-vazios)
  - [Adicionar e remover do final](#adicionar-e-remover-do-final)
  - [Adicionar e remover do inicio](#adicionar-e-remover-do-inicio)
  - [Concatenar](#concatenar)
  - [Fatiar](#fatiar)
  - [.forEach](#foreach)
  - [.map](#map)
  - [Filtrar](#filtrar)
  - [Reduzir](#reduzir)
  - [Procurar Elemento](#procurar-elemento)
  - [Procurar Index](#procurar-index)
  - [ITERAÇÃO AVANÇADA](#iteração-avançada)
  - [ORDENAÇÃO](#ordenação)
    - [Crescente](#crescente)
    - [Decrescente](#decrescente)
    - [Inverter](#inverter)
  - [MULTIDIMENSIONAL](#multidimensional)

## Array dinamico

```js
const dynamic = [];
```

## Construtor (adiciona espaços vazios)

```js
const static = new Array();
```

## Adicionar e remover do final

```js
static.push('a', 'b', 'c', 'd');
static.pop(); 
```

```js
['a', 'b', 'c']
```

## Adicionar e remover do inicio

```js
dynamic.shift(1, 2, 3, 4);
dynamic.unshift();
```

```js
[2, 3, 4]
```

## Concatenar

```js
const concated = static.concat(dynamic)
```

```js
['a',' b', 2, 3, 4] 
```

## Fatiar

Retorna copia de valores

```js
const sliced = static.slice(0, 1)
```

```js
['a', 'b']
```

## .forEach

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

## .map

Retorna novo array com resultado de uma função para cada elemento

```js
const doubled = dynamic.map(
    x => x * 2
);
```

```js
[4, 6, 8]
```

## Filtrar

Retorna novo array para os elementos que passarem em uma condição

```js
const evens = dynamic.filter(
    x => { x % 2 === 0 }
);
```

```js
[2, 4]
```

## Reduzir

Aplica uma 'função' a um 'acumulador' e a cada 'elemento do array',
resultando em um único valor.

```js
const sum = dynamic.reduce(
    (accumulator, currentValue) => { accumulator + currentValue }, 0
) 
```

```js
[15]
```

## Procurar Elemento

Retorna o primeiro elemento que satifaz a condição

```js
const element = dynamic.find( x => x > 3 );
```

```js
[4]
```

## Procurar Index

Retorna o ÍNDICE do primeiro elemento que satifaz a condição.

```js
const index = static.findIndex( x => x > 3 );
```

```js
[3]
```

## ITERAÇÃO AVANÇADA

despoirs eu escrevo sobre ``.every`` e ``.some``

## ORDENAÇÃO

### Crescente

```js
dynamic.sort()
```

### Decrescente

```js
dynamic.sort(
    (a, b) => b - a
)
```

### Inverter

```js
dynamic.reverse();
```

```js
[3, 2, 1]
```


## MULTIDIMENSIONAL

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

