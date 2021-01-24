// O Spread operator é o famoso '...'. Ele basicamente permite que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados.


const middle = [3,4]
const numbers = [1, 2, ...middle, 5, 6]

console.log(numbers)
//Spread significa espalhar, ou seja, este operador é usado para 'espalhar' os el ementos de um array quando interpretado em tempo de execução. Neste caso, os itens de middle foram espalhados dentro de numbers

// * Segredo #1 - Cópia de arrays com Spread

const employee = ['Matheus', 'Rian', 'Silva']
const newEmployee = [...employee]
newEmployee.push('Souza')
console.log(employee)
console.log(newEmployee)

// * Segredo #2 - Concatenação de arrays com Spread

//Sem spread
let arr = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
arr = arr.concat(arr2);
console.log(arr);

//Com spread

let arrComSpread = ['a', 'b', 'c'];
let arrComSpread2 = ['d', 'e', 'f'];
arrComSpread = [...arrComSpread, ...arrComSpread2];
console.log(arrComSpread);

// * Segredo #3 – Operações matemáticas com Spread

let arrayNumbers = [2, 4, 8, 6, 0];
let max = Math.max(...arrayNumbers);
console.log(max);
// 8

// * Segredo #4 – String para Array

let str = "hello";
let chars = [...str];
console.log(chars); 
// ['h', 'e',' l',' l', 'o']