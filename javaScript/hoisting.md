# Hoisting

Uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, **MAS** isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.

**Exemplos:**

``` js
//Funções

//Sem hoisting
function nomePessoa(nome) {
  console.log(nome);
}

nomePessoa('Matheus')

//Com hoisting
nomePessoa('Matheus')

function nomePessoa(nome) {
  console.log(nome);
}
```
Mesmo chamando a função primeiro, antes que ela seja escrita, o código vai funcionar. Porque na fase de compilação o JavaScript já guardou as nossas declarações em memória.