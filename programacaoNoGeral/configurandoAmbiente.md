# Configuração de ambiente para gerar build- Ionic

* Windows

Antes de iniciar, é preciso ter instalado:

- [Android Studio](https://developer.android.com/studio)
- [Gradle](https://gradle.org/)
- [Java SE/JDK](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html)
- [7-Zip](https://www.7-zip.org/)

Caso não tenha, faça dowloand e next em tudo. Não tem segredo.

> Obs: Lembre-se de aceitar todas as licenças do Android Studio.

Depois de tudo instalado, vamos para as variáveis de ambiente.

## Variáveis de ambiente

* Como acessar?

1. Em Pesquisar, procure e selecione: Sistema (Painel de Controle)
2. Clique no link Configurações avançadas do sistema.
3. Clique em Variáveis de Ambiente.

* Em seguida adicione as seguintes variáveis:

###  1. User Variables

* **Nome - Valor**
* JAVA_HOME - Path do JDK
* ANDROID_HOME - Path SDK
* Path - %JAVA_HOME%\bin && path\Android\Sdk\emulator

### 2. System Variables

* **Nome - Valor**
* JAVA_HOME - Path do JDK
* Path - %JAVA_HOME%\bin && C:\Program Files\7-Zip\ && C:\gradle\bin

Depois disso, seu ambiente já está configurado!

#### Algumas observações: 

* Caso tenha ficado com algumas dúvidas, peça ajuda;
* Leia os erros para compreender o por que do erro;
* Caso tenha certeza que tudo está correto, mas mesmo assim não roda, apague e clone o projeto novamente;