# API, REST RESTful

## API

Um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços;
- Meio de campo das tecnologias;
- Intermediador para troca de informações

## REST

- Transferência de dados, geralmente, usando o protocolo **HTTP.**
- O REST delimita algumas obrigações nessas transferências de dados
- Resources seria então, uma entidade(um objeto).

## 5 Necessidades(constraints) para ser RESTful

- RESTful, é a aplicação dos padrões REST.

- **Cliente e Servidor precisam ser separados**. Assim o armazenamento de dados(back) vai estar separado do front, dessa forma, poderemos ter uma portabilidade do nosso sistema. usado ReactJs para web e RN para smartphone usando apenas um serviço;

- **Stateless(Sem estado)**: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder(response) a requisição(request);

- **Cacheable**: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente;

- **Layered System**: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- **Code on demand(Opcional)**: Dá a possibilidade da nossa aplicação pegar códigos, como o js, por exemplo, e executar no cliente.

  

## Verbos HTTP

- Ex: https://localhost:3000/clientes(Resource)

- **GET**: Receber dados de um Resource;
- **POST**: Enviar dados ou informações para serem processados por um Resource;
- **PUT**: Atualizar dados de um Resource;
- DELETE: Deletar um Resource;

## Status das Respostas

- **1XX**: Informação
- **2XX**: Sucesso
- **3XX**: Redirection
- **4XX**: Client Error
- **5XX**: Server Error

## Boas Práticas

1. Utilizar verbos HTTP para nossas requisições;
2. Utilizar plural ou singular na criação de endpoints? *NÃO IMPORTA!* use um padrão(pattern);
3. Não deixar barra no final do endpoint;