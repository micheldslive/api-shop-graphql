# API SHOP-GRAPHQL

#### deploy: https://api-shop-graphql.herokuapp.com/

#

# Objetivo  

Criar a infraestrutura necessária para o armazenamento e coleta de dados de um site. Isso inclui:
  
- configuração do banco de dados com as tabelas necessárias e relacionamentos entre elas;
- criação de uma API capaz de enviar, coletar e atualizar dados;
- criação de uma página web para mostrar as capacidades da API.

# Tecnologias implementadas 

Neste projeto foram utilizadas as seguintes tecnologias / bibliotecas:

- **Nodejs**
  - **Yarn** - sistema de gerenciamento de pacotes
  - **Typescript** - por ser estritamente tipado 
  - **typeORM** - construtor de consultas para a comunicação
  - **postgres** - Drive para gerenciamento do banco de dados
  - **Apollo Server** - servidor GraphQL de código aberto
  - **GraphQL** - linguagem de consulta e ambiente de execução
  - **uuid** - gerador de id timestamp
  - **bcrypt** - criação de senhas hash

# Banco de Dados 

A estrutura do banco de dados foi concebida após analisar as necessidades do cliente no descritivo teste prático.

-----

## typeORM  

As tabelas foram criadas através do módulo de nó "typeORM" usando `synchronize` para implementar as tabelas, colunas, e relações necessárias.  
  
O arquivo `src/connection/index.ts` armazena as informações de conexão do typeORM com o banco de dados desejado.
  
  
![MySQL print to show created tables in the required database](/demo/PostgreSQL.png "Created tables")


## Escrevendo as informações iniciais  
  
Agora podemos inserir todos os dados iniciais por meio de um único comando de terminal, em vez de precisar inseri-los um a um usando a API ou o gerenciador de banco mysql.  
  
  
# API REST

Para a criação da API foi utilizado o Node.js. Com ele conseguimos nos comunicar com as requisições do protocolo HTTP. Separamos as etapas em:
- **entities**
- **inputs**
- **resolvers**

## SWAGGER
  
"Swagger" utilizado para criar gerar uma página mostrando o que é possível fazer com a API. Ele exibirá todos os endpoints e os métodos possíveis de usar.

![Possible requests to interact with each table](demo/apollo-server.png?raw=true "Possible requests")

# Execução  
  
### Para executar o aplicativo primeiro instale a `node_modules`:

```
yarn
```
  
### Ajuste o `src/connection/index.ts` para direcionar para o banco de dados desejado:

```
    {
      host: "localhost",
      user: "user_here",
      password: "password_here",
      database: "database_here",
    },
```

### Caso possua o docker instalado, utilize o comando abaixo para criar os `containers` do banco / api:

```
docker-compose up
```

### Para iniciar a api:
```
yarn dev
```
  
## Desenveloper<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/micheldslive">
        <img src="https://avatars.githubusercontent.com/u/55795597?v=4" width="100" alt="Foto no GitHub"/><br>
        <sub>
          <b>Michel Domingos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
