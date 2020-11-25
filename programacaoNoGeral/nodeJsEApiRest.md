# Node.js

- JavaScript no back-end;
  - Não lidamos com eventos do user finalizar;
  - Rotas e integrações;
- Plataforma;
- Construída em cima da V8;

## Características do Node

- Arquitetura event-loop
 - Baseado em eventos (Rotas na maioria dos vezes)
 - Call Stack
- Node single-thread
  - C++ por trás com libuv
  - Background threads
- Non-blocking 1/0

## Framework

- ExpressJs: como base, ótimo para iniciar, usa micro-serviços;

- Frameworks opinados: AdoniJs e nextJs

# Api Rest

## Tipos de parâmetros:

- Query Params: Filtros e paginação (Mais utilizado no get) 
- Route Params: identificar recursos (Atualizar/Delete) put e delete
- Request body: Conteúdo na hora criar ou editar um recurso(JSON) mais utilizado no post e put


## Middleware:
 
interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição.
