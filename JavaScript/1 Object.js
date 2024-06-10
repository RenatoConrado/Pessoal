// Sintaxe Literal
const person0 = {
    name: 'Alice',
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// Construtor Object
const person1 = new Object();
person1.name = 'Alice';
person1.age = 25;
person1.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}
person0.greet()
person1.greet()

// Iterando
for (let key in person0) {
    console.log(key, ': ', person0[key]);
}

/** MÉTODOS ÚTEIS
 * Object.Keys
 * retorna array com as 'keys'
 */
console.log('keys: ', Object.keys(person0));
/** Object.values
 * retorna array com o valor
 */
console.log('values:', Object.values(person0))
/** Object.entries
 * retorna pares '[key, value]'
 */
console.log('keys and values:', Object.entries(person0))
/** Object.assign
 * Copia os valores de um ou mais 'objetos'
 * para o 'objeto destino'
 */
const cityInfo = { city: 'Recife' }
console.log(Object.assign({}, person0, cityInfo))

/** PROPRIEDADES DE ATRIBUTOS
 * 'Value':         Valor da propiedade
 * 'writable':      Pode ser alterado
 * 'enumerable':    Aparece em iterações
 * 'configurable':  Pode ser deletada ou modificada
 */
Object.defineProperty(person0, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

// HERANÇA
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