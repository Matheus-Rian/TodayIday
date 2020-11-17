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