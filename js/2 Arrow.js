// Tradicional
function add(a, b) {
    return a + b;
}
// Arrow
const adicao = (a, b) => a + b;

/*  Arrow functions não têm seu próprio 'this'. 
    elas herdam o 'this' do escopo em que elas foram definidas. 
    o valor de 'this' dentro de uma arrow function 
    é o mesmo do contexto onde a função foi definida.
*/

/*  Não podem ser usadas como construtores
    operador 'new'.
*/

// QUANDO USAR
/*  Métodos de array
    'maps', 'filter' e 'reduce.
*/
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);

/*  Callbacks
    passar uma função como argumento.
*/
setTimeout(() => {
    console.log('função como parametro');
}, 1000)

// QUANDO EVITAR
/*  Métodos de objetos
    inadequado quando precisa do seu próprio 'this'.
*/
const person = {
    name: 'Alice',
    greet: () => {
        console.log(`hello, my name is ${this.name}`);
    } // 'this' não se refere ao objeto 'person'
}