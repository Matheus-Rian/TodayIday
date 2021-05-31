// * É hora de leite e biscoitos?

/* A véspera de Natal está quase chegando, então, naturalmente,  
precisamos preparar um pouco de leite e biscoitos para o Papai Noel! 
Crie uma função que aceite um objeto Date e retorne verdadeiro 
se for véspera de Natal (24 de dezembro) e falso caso contrário.
Lembre-se de que o mês de data do JavaScript é baseado em 0, 
o que significa que dezembro é o 11º mês, enquanto janeiro é 0.
*/

// Exemplos
// timeForMilkAndCookies (new Date (2013, 11, 24)) ➞ verdadeiro

// timeForMilkAndCookies (new Date (2013, 0, 23)) ➞ falso

// timeForMilkAndCookies (new Date(3000, 11, 24)) ➞ verdadeiro

// * Solução 

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}

console.log(timeForMilkAndCookies(new Date(3000, 10, 24)));
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));
