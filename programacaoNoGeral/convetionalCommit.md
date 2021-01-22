# Convetional commit

## Esqueleto do commit:

```
<tipo>[escopo opcional]: <descrição>
<corpo opcional>
<rodapé opcional>
```

Os **Tipos** se resumem em ***feat, fix, refactor, style, chore, doc e test***

- **feat** são quaisquer adições ao código. Enquanto elas podem alterar parte do código já existente, o foco dela é a implementação de features novas ao ecossistema.
- **fix** refere-se às correções de bugs. Caso seu time trabalhe com issues ou com Jira, é possível com smart commits associar seu commit a uma issue e alterar seu estado com keywords como resolve, fix, solves. Em geral, essas marcações devem vir na descrição ou no footer.
- **refactor** refere-se a quaisquer mudanças que atinjam o código, porém não alterem sua funcionalidade. Alterou o formato de como é processamento em determinada parte da sua tela, mas manteve a mesma funcionalidade? Declare como refactor.
- Alterações referentes a formatações de código, semicolons, trailing spaces e lint em geral são em **style**.
- Em uma das equipes com que trabalho, decidimos por criar novos dois tipos e ignorar o tipo **chore** porque ele não passava a ideia que precisávamos e passamos a utilizar outros dois: **env** e **project**. Vale notar que esses dois tipos fogem das especificações do conventional commit. Em **project**, todo o escopo de versões e pacotes ficam inseridos nele, por exemplo:

```
project: bump version to 0.0.7
project(package): bump react-navigation version to beta.19
project(package): add native-base@2.2.1

```

Já o **env**, utilizamos para as funções restantes do antigo **chore**, como atualizações de arquivos de CI, docker, build files, tasks runners ou configurações, por exemplo:

```
env(docker): add a node script to  DockerFile
```

- Com **doc**, temos conteúdo relativo à documentação.
- Commits com tipo **test** estão relacionados às modificações e adições aos testes.

**Escopos** podem ser quaisquer partes do projeto; é importante que eles sejam compreendidos de uma maneira quase automática para alguém que não conhece o projeto. Em geral, a utilização do escopo é bem genérica, especificando apenas o primeiro contexto (login, middleware, profile). No entanto, prefiro ser mais específico e definir um segundo escopo (containers/login, por exemplo). Supondo que você tenha feito uma refatoração nas rotas relativas as settings do seu projeto, uma possibilidade de commit seria:

```
feat(routes/settings): adjust settings to be called in any screen.
```

As **descrições** devem ser suficientemente claras, utilizando seu espaço até o máximo permitido da linha. Caso você veja que a explicação não foi suficiente, sinta-se à vontade para adicionar conteúdo ao corpo.

O **corpo**, por sua vez, vai conter descrições mais precisas do que está contido naquele commit, mostrando as razões ou consequências geradas por esse código, assim como instruções futuras.

O **rodapé** restringe-se às alterações de estado via smart commit, como resoluções de estado de issues, e.g. ‘resolves issue #312’.

E se existir uma mudança drástica que quebrará funcionalidades, você **DEVE** (sim, em caixa alta) marcar no body com ‘**BREAKING CHANGE**’ (sim, em caixa alta) e explicar as razões que levaram a essa marcação.