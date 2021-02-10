// Array - O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

// ! Methods Array

// * 1 - length
const names = ['Matheus', 'Rodrigo'];

console.log(names.length); // Retorna a quantidade de elementos dentro do array(tamanho)

// * 2 - Acessar um item (index) do Array

const positionPrimary = names[0] // Para acessar um item do array é usado: nameArray[index]

console.log(positionPrimary)

// * 3 - Iterar um array

names.forEach(function (item, indice, array) {
  console.log(item, indice);
});
// Matheus 0
// Rodrigo 1

// * 4 Adicionar um item ao final do Array

const addFinish = names.push('Brenda'); 
// ['Matheus', 'Rodrigo', 'Brenda'];

// * 5 Remove um item ao final do Array

const removeFinish = names.pop('Brenda'); 
// ['Matheus', 'Rodrigo'];

// * 6 Remover do início do Array

const initialRemove = names.shift(); // remove Matheus do início
// ['Rodrigo'];

// * 7 Adicionar ao início do Array

const initialAdd = names.unshift('Matheus') // adiciona Matheus ao início
// ['Matheus', 'Rodrigo'];

// * 8 Procurar o índice de um item na Array

const index = names.indexOf('Matheus');
console.log(index)

// * 9 Remover um item pela posição do índice

var removedItem = names.splice(index, 1); // é assim que se remove um item
// ['Rodrigo']


