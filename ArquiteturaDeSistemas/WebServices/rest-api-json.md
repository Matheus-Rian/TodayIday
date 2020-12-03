# REST - API - JSON - Aula 4

## REST

* REST - Representational State Transfer
* É um estilo de arquitetura de software que define a implementação de um serviço web
* Podem trabalhar com os formatos XML, JSON ou outros.

## Vantagens

* Permite integrações entre aplicações e também entre cliente e servidor em páginas web e aplicações.
* Utiliza dos métodos HTTP para definir a operação que está sendo efetuada
* Arquitetura de fácil compreensão

## Estrutura do REST

- Cliente : Consumindo o serviço
- Servidor : Disponibiliza o serviço

Cliente -> Manda uma Requisição HTTP(GET, POST, PUT, DELETE...) 

Servidor -> Retorna um código de operação(HTTP STATUS), uma mensagem(Texto, JSON, XML...)

> Quando uma aplicação web disponibiliza um conjunto de rotinas e padrões através de serviços web podemos chamar esse conjunto de API.

## API

* API - Application Programming Interface
* São conjuntos de rotinas documentadas e disponibilizados por uma aplicação para que outras aplicações possam consumir suas funcionalidades
* Ficou popular com o aumento de serviços Web
* As maiores plataformas de tecnologia disponibilizam APIs para acesso de suas funcionalidades, algumas delas são: Facebook, Twitter, Telegram, Whatsapp, Github...

## Principais métodos HTTP

* GET - Solicita a representação de um recurso
* POST - Solicita a criação de um recurso
* DELETE - Solicita a exclusão de um recurso
* PUT - Solicita a atualização de um recurso

## JSON

* JSON - JavaScript OBject Notation
* Formatação leve utilizada para troca de mensagens entre sistemas
* Usa-se uma estrutura de chave e valor e também de listas ordenadas
* Um dos formatos mais populares e mais utilizados para troca de mensagens entre sistemas

* Exemplo:
``` json
{
  "nome": "vingadores ultimato",
  "ano_lancamento": "2019",
  "personagens": [
    {
      "nome": "Homem de Ferro"
    },
    {
      "nome": "Homem Aranha"
    },
    {
      "nome": "Thanos"
    }
  ]
}
```