# MasterClassReact_pt1
### Cod3r

## props.children

No react temos a propriedade children e o seu intuito é pegar o conteudo que está inserido dentro do componente, por exemplo:

``` React
        <div className="Conteudo">
            {props.children}
        <!-- O props.children vai pegar o conteúdo dentro do componente do Card     -->
        </div>

        <Card titulo='Exec X'>
            Conteúdo pego pelo children
        </Card>
```
## Flew-wrap - Responsividade

Essa propriedade quando tiver o valor wrap vai permitir a quebra de linha. Por exemplo, quando eu estiver diminuindo a minha tela, eu irei passar uma propriedade min-witdh dizendo um limite, quando esse limite é ultrapassado o flex-wrap entra em ação quebrando a linha. 

## Comunicação direta - Do Pai para o Filho

Eu tenho um componente Pai e Filho e o comp Pai consegue passar informações/referências para o Filho. Exemplo:

``` React
Componente Filho
export default (props) => (
  <div>
    <h3>Componente Filho</h3>
    <h4>
      {props.children} - {props.sobrenome}
    </h4>
  </div>
);

Componente Pai 
export default props => 
    <div>
        <Filho sobrenome='Silva'>Maria</Filho>
        <Filho sobrenome='Silva'>Matheus</Filho>
        <Filho sobrenome='Silva'>Mario</Filho>
    </div>
```
## Comunicação Indireta - Do Filho para o Pai

Eu tenho um componente Pai e Filho e o comp Filhp consegue passar informações/referências para o Pai. Exemplo:

``` React
Componente Filho
export default props => 
    <div>
        <button onClick={() => {
            props.onClicar(Math.random())
        }}>Alterar</button>
    </div>

Componente Pai 
export default (props) => {
  function handleClick(valorGerado) {
    console.log("Alterei!!");
    console.log(valorGerado)
  }
  return (
    <div>
      <h4>Valor</h4>
      <Sub onClicar={handleClick}></Sub>
    </div>
  );
};

```

## Estados React

Antes de começar a usar os Estados eu tenho que importar ele.
> import React, { useState } from 'react'

Em seguida eu crio uma const com o destructuting com o meu estado, exemplo: 

``` React
const [num , setNum] = useState(0)
<!-- O num recebe o estado inicial que nesse caso é 0. O setNum receberá o valor apenas quando o num for alterado 
Exemplo usando o useState:
-->
export default (props) => {
    
  const [texto, setTexto] = useState("Valor");
  const [num, setNum] = useState(0);

  function handleClick(valorGerado, texto) {
    setNum(valorGerado);
    setTexto(texto);
  }
  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Sub onClicar={handleClick}></Sub>
    </div>
  );
};
```