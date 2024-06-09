// Array dinamico 
const dynamic = [];
// Construtor (adiciona espaços vazios)
const static = new Array();

// Adiciona e remove ao final
static.push('a', 'b', 'c', 'd');
static.pop(); // [a, b, c]

// Adiciona e remove ao inicio
dynamic.shift(1, 2, 3, 4);
dynamic.unshift(); // [2, 3, 4]

// Concatena
const concated = static.concat(dynamic) // [a, b, 2, 3, 4] 

// Retorna copia de valores
const sliced = static.slice(0, 1) // [a, b]

// executa uma função para cada elemento
static.forEach(                     // a
    element => console.log(element) // b
)                                   // c

// Retorna novo array com resultado de uma função para cada elemento
const doubled = dynamic.map(
    x => x * 2
); // [4, 6, 8]

// Retorna novo array para os elementos que passarem em uma condição
const evens = dynamic.filter(
    x => { x % 2 === 0 }
); // [2, 4]

// Aplica uma 'função' a um 'acumulador' e a cada 'elemento do array',
// resultando em um único valor.
const sum = dynamic.reduce(
    (accumulator, currentValue) => { accumulator + currentValue }, 0
) // [15]

// Retorna o primeiro elemento que satifaz a condição
const element = dynamic.find( x => x > 3 ); // [4]

// Retorna o ÍNDICE do primeiro elemento que satifaz a condição.
const index = static.findIndex( x => x > 3 ); // [3]

// ITERAÇÃO AVANÇADA
// .every and .some

// ORDENAÇÃO
dynamic.sort( // Descrescente
    (a, b) => b - a
)
dynamic.sort() // Crescente
// Inverter
dynamic.reverse(); // [3, 2, 1]

// MULTIDIMENSIONAL
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] // Linha 2 && Coluna 3 
console.log(matrix[1][2]) // [6]