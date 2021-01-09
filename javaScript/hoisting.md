# Hoisting

Uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, **MAS** isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.

``` js
function nomePessoa(nome) {
  console.log(nome);
}

nomePessoa('Matheus')
```