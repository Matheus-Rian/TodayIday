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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/682f642b-09a7-4c67-b1a9-6f6ebe834cda/screenshot-www.udemy.com-2020.12.16-08_17_15.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/682f642b-09a7-4c67-b1a9-6f6ebe834cda/screenshot-www.udemy.com-2020.12.16-08_17_15.png)

# 2- Diretivas

## Attribute Directives

- **Altera a aparência e o comportamento de um elemento, componente ou outra diretiva.**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4de0abc-7226-4960-8cdd-11adde82eec1/screenshot-www.udemy.com-2020.12.16-08_14_20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4de0abc-7226-4960-8cdd-11adde82eec1/screenshot-www.udemy.com-2020.12.16-08_14_20.png)

- **Decorator:** Objetivo de evitar herança e trabalhar com componetização(Vem sempre com um @)

**Exemplo:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a421035e-af6e-40cb-b4d7-04df9f55e206/screenshot-www.udemy.com-2020.12.16-08_28_23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a421035e-af6e-40cb-b4d7-04df9f55e206/screenshot-www.udemy.com-2020.12.16-08_28_23.png)

## Structural Directives

- Altera o layout adicionando e removendo elementos da DOM.
- As **Structural Directives** tem um ***(asterisco) na frente**!

**Exemplos:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de7e71bc-ef55-4954-ada9-9cbd1fa7ae04/screenshot-www.udemy.com-2020.12.16-08_31_45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de7e71bc-ef55-4954-ada9-9cbd1fa7ae04/screenshot-www.udemy.com-2020.12.16-08_31_45.png)

- No primeiro exemplo, só vai ser exibido o form se o product for true.
- No segundo exemplo, ele vai acrescentar novos elementos. Caso tenha 10 produtos, vai ser gerado 10 <li> com o product

## Property Binding

- Comunicação/ligação entre o HTML e TS, por meio do [].

**Exemplo:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce744249-f811-4b60-b072-151b63ccf446/screenshot-www.udemy.com-2020.12.16-08_44_21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce744249-f811-4b60-b072-151b63ccf446/screenshot-www.udemy.com-2020.12.16-08_44_21.png)

Quando eu coloco no meu html uma variável entre **[]**, eu estou dizendo que ela vai pegar o valor de products(nesse caso) lá no TS.

## Event Binding

- Comunicação/ligação entre o HTML e TS, por meio de ().

**Exemplo:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/056c42d7-ba40-4921-bfb5-800f50262699/screenshot-www.udemy.com-2020.12.16-08_47_51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/056c42d7-ba40-4921-bfb5-800f50262699/screenshot-www.udemy.com-2020.12.16-08_47_51.png)

Quando o button for clicado, vai ser chamado o método "createProdutct()"

## Two Way Data Binding

- Automatizar o tráfego de dados entre a View(HTML) e o Model(TypeScript).

**Exemplo:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68f9797b-f41d-4258-af50-bd99eae40592/screenshot-www.udemy.com-2020.12.16-21_28_36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68f9797b-f41d-4258-af50-bd99eae40592/screenshot-www.udemy.com-2020.12.16-21_28_36.png)

Se o Model muda, atualiza a View, e caso a View mude, atualiza o Model.

# 3- Rotas (Angular Router)

Quando queremos mudar de rotas, iremos mudar a url e os componentes.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17c17883-b552-4cc4-97b3-03c7624243e5/screenshot-www.udemy.com-2020.12.16-21_38_08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17c17883-b552-4cc4-97b3-03c7624243e5/screenshot-www.udemy.com-2020.12.16-21_38_08.png)

**Exemplo:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cf73a6b-82ca-40a3-92dd-c8d0b86320a9/screenshot-www.udemy.com-2020.12.16-21_40_53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cf73a6b-82ca-40a3-92dd-c8d0b86320a9/screenshot-www.udemy.com-2020.12.16-21_40_53.png)

# 4- Pipes |

- Processamentos feitos encima de variavéis.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a30585e0-a4d4-47cf-8b50-e61f38a3c92d/screenshot-www.udemy.com-2020.12.16-21_45_23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a30585e0-a4d4-47cf-8b50-e61f38a3c92d/screenshot-www.udemy.com-2020.12.16-21_45_23.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/646286a1-7896-4cdf-9b5e-9a4d4929eeb6/screenshot-www.udemy.com-2020.12.16-21_47_02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/646286a1-7896-4cdf-9b5e-9a4d4929eeb6/screenshot-www.udemy.com-2020.12.16-21_47_02.png)

**Chaining - Encadeamento**

- No segundo exemplo, eu estou passando duas formatações para a variável.

# 5- Observables

- Programação Reativa - é um modelo de programação sobre fluxos de dados, potencialmente assíncronos, em combinação com consumo/roteamento de eventos e propagação de estado.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7033d9b5-03d3-4812-a149-6e5deabd1211/screenshot-www.udemy.com-2020.12.16-21_58_51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7033d9b5-03d3-4812-a149-6e5deabd1211/screenshot-www.udemy.com-2020.12.16-21_58_51.png)

- **Padrão Observer** - Padrão de Projeto mais utilizado da web

- **Padrão orientado a Evento!**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6329a1a4-7403-44cc-91b7-4afcb262ce7d/screenshot-www.udemy.com-2020.12.16-22_10_42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6329a1a4-7403-44cc-91b7-4afcb262ce7d/screenshot-www.udemy.com-2020.12.16-22_10_42.png)

### Entendendo Observables

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec82c02b-9d16-4a20-ab33-5933bd41e5bb/screenshot-www.udemy.com-2020.12.16-22_19_54.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec82c02b-9d16-4a20-ab33-5933bd41e5bb/screenshot-www.udemy.com-2020.12.16-22_19_54.png)

**Exemplo:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8c56a9f-4e6a-427e-b1cc-4040978c2773/screenshot-www.udemy.com-2020.12.16-22_23_04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8c56a9f-4e6a-427e-b1cc-4040978c2773/screenshot-www.udemy.com-2020.12.16-22_23_04.png)