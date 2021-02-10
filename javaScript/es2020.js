
const user = { login: undefined };

console.log(user.login ?? 'sem login');
//Sem login

// *Flat 
// Cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.

const names = [
  ['Matheus', 'Rian'],
  ['Alwana']
];

const newArray = names.flat();

// [ 'Matheus', 'Rian', 'Alwana' ]