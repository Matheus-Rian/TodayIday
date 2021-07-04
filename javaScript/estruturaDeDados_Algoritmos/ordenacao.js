// * Ordenando elementos

const numbers = [1, 2, 3, 4, 5, 10, 11, 12];
console.log(numbers.reverse());
console.log(numbers.sort());
console.log(numbers.sort(compare));

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0; 
}

// * Ordenação personalizada

const friends = [
  {name: 'Rian', age: 23},
  {name: 'John', age: 18},
  {name: 'Matheus', age: 21},
];

function compareAge(a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
}

console.log(friends.sort(compareAge));

// * Ordenando strings

const names = ['Ana', 'ana', 'John', 'john'];
console.log(names.sort());
// [ 'Ana', 'John', 'ana', 'john' ] - Isso acontece porque o JS compara os caracteres de acordo com o seu valor ASCII(www.asciitable.com).
console.log(names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}))
console.log(names.sort((a, b) => a.localeCompare(b)));
