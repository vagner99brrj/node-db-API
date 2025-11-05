# node-db-api

Uma API simples de CRUD (Create, Read, Update, Delete) para gerenciamento de usuários, construída com Node.js, Express e Prisma.

Este projeto serve como uma base para um sistema que, no futuro, poderá ser expandido para automação de dados jurídicos (RPA) ou outras funcionalidades.

##  Tecnologias Utilizadas

* **Node.js**: Ambiente de execução
* **Express**: Servidor e gerenciamento de rotas
* **Prisma**: ORM para comunicação com o banco de dados

## Como Executar

1.  **Clonar o repositório**
    ```bash
    git clone [SEU_LINK_DO_GIT]
    cd node-db-api
    ```

2.  **Instalar dependências**
    ```bash
    npm install
    ```

3.  **Configurar Banco de Dados (Prisma)**
    * Crie um arquivo `.env` na raiz.
    * Adicione sua string de conexão no `.env`:
        ```env
        DATABASE_URL="sua_string_de_conexao_aqui"
        ```

4.  **Rodar as Migrations do Prisma**
    ```bash
    npx prisma migrate dev
    ```

5.  **Iniciar o servidor**
    ```bash
    node server.js
    ```
    (Ou `npm run dev` se você tiver um script configurado no `package.json`)

## Endpoints da API

* `GET /usuarios`: Lista todos os usuários.
* `POST /usuarios`: Cria um novo usuário.
* `PUT /usuarios/:id`: Atualiza um usuário existente.
* `DELETE /usuarios/:id`: Deleta um usuário.