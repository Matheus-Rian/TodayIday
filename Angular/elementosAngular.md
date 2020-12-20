# **Elementos Angular**

# Elementos que serão abordados:

- Components
- Diretivas
- Rotas
- Pipes
- Observables
- Services

# 1- Componente

- O componente tem o seu próprio mundo. As alterações feitas nele não vai conflitar com os outros componentes.

<p align="center">
  <img src="../images/componenteAngular.png" alt='Componente Angular' width="50%">
</p>

# 2- Diretivas

## Attribute Directives

- **Altera a aparência e o comportamento de um elemento, componente ou outra diretiva.**

<p align="center">
  <img src="../images/decorator.png" alt='Decorator' width="50%">
</p>


- **Decorator:** Objetivo de evitar herança e trabalhar com componetização(Vem sempre com um @)

**Exemplo:**

<p align="center">
  <img src="../images/decoratorAppRed.png" alt='Decorator' width="50%">
</p>

## Structural Directives

- Altera o layout adicionando e removendo elementos da DOM.
- As **Structural Directives** tem um ***(asterisco) na frente**!

**Exemplos:**

<p align="center">
  <img src="../images/structuralDirectives.png" alt='structuralDirectives' width="50%">
</p>

- No primeiro exemplo, só vai ser exibido o form se o product for true.
- No segundo exemplo, ele vai acrescentar novos elementos. Caso tenha 10 produtos, vai ser gerado 10 <li> com o product

## Property Binding

- Comunicação/ligação entre o HTML e TS, por meio do [].

**Exemplo:**

<p align="center">
  <img src="../images/propertyBinding.png" alt='property Binding' width="50%">
</p>

Quando eu coloco no meu html uma variável entre **[]**, eu estou dizendo que ela vai pegar o valor de products(nesse caso) lá no TS.
## Event Binding

- Comunicação/ligação entre o HTML e TS, por meio de ().

**Exemplo:**

<p align="center">
  <img src="../images/eventBinding.png" alt='Event Binding' width="50%">
</p>

Quando o button for clicado, vai ser chamado o método "createProdutct()"
## Two Way Data Binding

- Automatizar o tráfego de dados entre a View(HTML) e o Model(TypeScript).

**Exemplo:**

<p align="center">
  <img src="../images/twoWay.png" alt='property Binding' width="50%">
</p>

Se o Model muda, atualiza a View, e caso a View mude, atualiza o Model.
# 3- Rotas (Angular Router)

Quando queremos mudar de rotas, iremos mudar a url e os componentes.

<p align="center">
  <img src="../images/rotas.png" alt='Rotas' width="50%">
</p>

**Exemplo:**

<p align="center">
  <img src="../images/rotas(2).png" alt='Rotas' width="50%">
</p>

# 4- Pipes |

- Processamentos feitos encima de variavéis.

<p align="center">
  <img src="../images/pipes.png" alt='Pipes' width="50%">
</p>


<p align="center">
  <img src="../images/pipes(2).png" alt='Pipes' width="50%">
</p>

**Chaining - Encadeamento**

- No segundo exemplo, eu estou passando duas formatações para a variável.

# 5- Observables

- Programação Reativa - é um modelo de programação sobre fluxos de dados, potencialmente assíncronos, em combinação com consumo/roteamento de eventos e propagação de estado.

<p align="center">
  <img src="../images/observables(1).png" alt='Observables' width="50%">
</p>

- **Padrão Observer** - Padrão de Projeto mais utilizado da web

- **Padrão orientado a Evento!**

<p align="center">
  <img src="../images/observables(2).png" alt='Observables' width="50%">
</p>

### Entendendo Observables


<p align="center">
  <img src="../images/observables(3).png" alt='Observables' width="50%">
</p>


**Exemplo:**

<p align="center">
  <img src="../images/observables(4).png" alt='Observables' width="50%">
</p>
