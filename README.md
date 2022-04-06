# Projeto Node Typescript SQLServer

Este repositório é um _boilerplate_ contendo os padrões de código com ESLint, a estrutura de pastas a ser utilizada e os padrões de commit.

## :memo: Padrões de Commit utilizados no projeto

Utilize o commit semântico definido pelas regras abaixo para descrever as intenções de cada commit de seu código:

- ```feat```- indica que seu trecho de código está incluindo um novo recurso ao projeto;
- ```fix``` - indica que seu trecho de código commitado está solucionando um problema (bug fix);
- ```refact``` refere-se a mudanças de refatorações do código que não alteram funcionalidades do projeto mas trazem algum tipo de melhoria na performance do código devido a um code review, por exemplo;
- ```style``` - indica que houve alterações referentes a formatações de código, semicolons, trailing spaces, lint, etc e não inclui alterações em código;
- ```test``` - são utilizados quando há alterações em testes, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código);
- ```docs```- indica que houve mudanças na documentação, como por exemplo no Readme do repositório;
- ```build```- utilizados quando houver modificações em arquivos de build e dependências;
- ```ci```- indica mudanças relacionadas a integração contínua (continuous integration).

**_Exemplo de um Commit:_**
```feat(kesXXX): implementa endpoint de produtos```
onde XXX é o número da task no Jira criado no momento da Sprint

## :file_folder: Organização das pastas

As pastas deste projeto devem ser organizadas conforme exemplo a seguir:

Exemplo árvore de pastas e arquivos :
```
src
|
├── controllers
|    |── nameController01.ts
|    |── nameController02.ts
├── database
│    |── connection.ts
│    |── queries.ts
├── models
│    |── nameModel01.ts
│    |── nameModel02.ts
├── requests
│   ├── requestName01.http
│   ├── requestName02.http
├── routes
│   ├── nameRoute01.ts
│   |── nameRoute02.ts
|
│__ index.ts
|

```

## :traffic_light: Instalação

##### **Clone o repositório com git clone**
```
$ git clone https://github.com/orlando-messias/node-typescript-sqlserver.git
```
##### **Acesse a pasta _node-typescript-sqlserver_**
```
$ cd node-typescript-sqlserver
```

##### **Instale todas as dependências com o comando yarn**
```
$ yarn
```

##### **Rode a aplicação localmente com yarn dev**
```
$ yarn dev
```

:bulb: No VsCode instale as extensões **ESLint** e **EditorConfig for VS Code** para ajudar na identificação de erros de padrão de escrita do código.

## :gear: Tecnologias:

- [ESLint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org)
- [mssql](https://www.npmjs.com/package/mssql)
#
Desenvolvido por Orlando Messias [linkedin.com/in/orlando-messias-dev](https://www.linkedin.com/in/orlando-messias-dev)
