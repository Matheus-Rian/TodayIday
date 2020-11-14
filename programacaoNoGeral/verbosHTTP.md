# Principais Verbos HTTP

## Get

- Ele solicita um pedido para mostrar os dados para o usuário. Por exemplo, quando ele clicar no botão de mostrar pokemons, irei fazer um pedido para a minha api mostrar para eles os valores armazenados no meu back.

## Post

- Usado para criar um novo dado no meu banco de dados. Por exemplo, quando meu usuário clicar no botão de finalizar cadastro, será enviado para o meu BD as suas informações, sendo assim, mais um usuário cadastrado no meu serviço.

## Delete

- Utilizado para remover um dado. Por exemplo, eu quero remover um usuário, para eu conseguir fazer isso eu tenho que passar uma requisição DELETE com seu ID para remove-lo.

## Patch

- Utilizado para atualizar um(ou mais) dado/atributo do meu usuário. Por exemplo:

```json
{
	"nome": 'Matheus',
	"email": 'souzamatheusrian@gmail.com',
	"senha": '123456'
}

/* PATCH /file.txt HTTP/1.1 
nome: 'Matheus Rian'

[descrição das mudança]*/
```

Utilizando o Patch eu preciso apenas passar o dado/atributo que eu quero mudar.