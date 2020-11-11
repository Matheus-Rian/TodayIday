# React

O React é uma biblioteca focada em construção de interfaces, utilizando o modelo de SPA(Single Page Applications). Todo o código fica dentro de um javascript.

A parte mais legal do React(minha opinião) é a sua comunidade. Na internet tem muito conteúdo gratuito sobre a lib. 

*A rocketseat é uma das principais criadoras de conteúdo sobre o React, recomendo.*

## Vantagens

1. Organização do código (Componetização);
2. Divisão de responsabilidades;
3. Programação declarativa;

## Os principais conceitos do React

1. Componetização
2. Propriedades
3. Estado 
4. Imutabilidade

## Iniciando com o React

Iniciaremos nossos estudos react utilizando o ***create-react-app***. Mas por quê? O create-react-app trás um ambiente configurado, com isso podemos focar no aprendizado da lib.

## Criando pasta com React

```bash
npx create-react-app nomePasta 
```

```bash
cd nomePasta
```

```bash
code .
```

## Iniciando Server

```bash
yarn start
```

## Hello World com React

Abra o arquivo App.js que fica dentro de src (localizada na raiz da aplicação)

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
```

Apague o contéudo que vem como padrão na div e coloque um Hello World. 

> JSX: HTML dentro do Javascript(JavaScript XML)

# Componentes

O nosso componente será uma function que retornar um HTML no return.

```jsx
//App.js

import React from 'react'
import { Header } from "./components/Header";

/* Podemos exportar componentes de duas maneiras:
	1. Na function: export default function App() {}
	2. Depois de criado: export default App
*/

 export default function App() { 

  return (
    <> 
      <Header title="HomePage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Dale do Dale</li>
        </ul>
      </Header>
    </> // fragment React <> </>
  );
}

//Depois de criado, temos que importar o componente (export default App;)

export default App
```

- Todo componente começa com letra maiscula no nome do arquivo(Header.js).
- Um componente é criado para se reutilizado em vários lugares da aplicação
- Além disso tem que importar o react toda vez (import React from 'react')

# Props

Nos nossos componentes podemos receber **apenas as props como parâmetro** nas function. 

```jsx
import React from 'react'

export default function Header(props) { 
   return (
        <header>
            <h1>{props.title}</h1>           
        </header>
    )
}
```

## Desestruturção de props

No nosso exemplo acima, estamos pegando o title da props. Podemos desestruturar, para ficar dessa maneira:

```jsx
import React from 'react'

export default function Header({title}) { 
   return (
        <header>
            <h1>{title}</h1>           
        </header>
    )
}
```

## Propriedade children

O React tem uma própria propriedade chamada children. Ela mostra todo o conteúdo de uma tag.

```jsx
//Exemplo:
      <Header title="Projects">
        (Inicio children)
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Dale do Dale</li>
        </ul>
        (Fim children)
      </Header>

```

```jsx
import React from 'react'

export default function Header({title, children}) { 
   return (
        <header>
            <h1>{title}</h1>
            {children}            
        </header>
    )
}

/* {children}
      <Header title="Projects">
        (Inicio children)
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Dale do Dale</li>
        </ul>
        (Fim children)
      </Header>
*/
```