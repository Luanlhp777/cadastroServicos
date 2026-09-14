# Cadastro de Serviços

Sistema de cadastro e gerenciamento de serviços desenvolvido como projeto de estudo e portfólio.

A aplicação está sendo construída com arquitetura separada entre **Frontend**, **Backend** e **Banco de Dados**, utilizando React, Node.js, Express e MySQL.

O projeto tem como objetivo praticar a construção de uma aplicação web completa, incluindo API REST, integração com banco de dados, Stored Procedures, consumo de endpoints e gerenciamento de estado no frontend.

---

## Status do Projeto

🚧 Projeto em desenvolvimento.

### Banco de Dados

- [x] Criação do banco de dados
- [x] Criação da tabela de serviços
- [x] Inserção inicial de serviços
- [x] Procedure para listar serviços
- [x] Procedure para cadastrar serviços
- [x] Procedure para atualizar serviços
- [x] Procedure para desativar serviços
- [x] Procedure para ativar serviços

### Backend

- [x] Configuração do Node.js
- [x] Configuração do Express
- [x] Conexão com MySQL
- [x] Configuração das variáveis de ambiente
- [x] Criação da API REST
- [x] Rota para listar serviços
- [x] Rota para cadastrar serviços
- [x] Rota para atualizar serviços
- [x] Rota para desativar serviços
- [x] Rota para ativar serviços

### Frontend

- [ ] Configuração do React com Vite
- [ ] Cadastro de serviços
- [ ] Listagem de serviços
- [ ] Alteração de serviços
- [ ] Ativação e desativação de serviços
- [ ] Integração com a API
- [ ] Tratamento de erros
- [ ] Estados de carregamento

---

## Objetivo

O objetivo deste projeto é desenvolver um sistema completo de gerenciamento de serviços, aplicando conceitos estudados em desenvolvimento web e banco de dados.

Entre os principais conceitos trabalhados estão:

- CRUD
- API REST
- Node.js
- Express
- React
- MySQL
- Stored Procedures
- Fetch API
- Integração Frontend e Backend
- Tratamento de erros
- Variáveis de ambiente
- Git e GitHub

---

## Tecnologias Utilizadas

### Frontend

- React
- JavaScript
- Vite
- HTML
- CSS
- Fetch API

### Backend

- Node.js
- Express
- MySQL2
- CORS
- dotenv

### Banco de Dados

- MySQL
- MySQL Workbench
- SQL
- Stored Procedures

### Versionamento

- Git
- GitHub

---

## Estrutura do Projeto

```text
cadastroServicos/
├── backend/
│
├── database/
│   ├── createDatabase.sql
│   ├── createTable.sql
│   ├── insertServicos.sql
│   ├── procedureListarServicos.sql
│   ├── procedureCadastrarServico.sql
│   ├── procedureAtualizarServico.sql
│   ├── procedureDesativarServico.sql
│   ├── procedureAtivarServico.sql
│   └── README.md
│
├── frontend/
│
├── .env
├── .gitignore
└── README.md
```

---

## Arquitetura

A aplicação será organizada utilizando a seguinte arquitetura:

```text
React
   ↓
Fetch API
   ↓
Node.js + Express
   ↓
MySQL
   ↓
Stored Procedures
```

### Frontend

Responsável pela interface com o usuário.

O React realizará requisições HTTP para a API desenvolvida no backend.

### Backend

Responsável pelas regras da aplicação e comunicação com o banco de dados.

A API será desenvolvida utilizando:

```text
Node.js
Express
MySQL2
```

### Banco de Dados

Responsável pelo armazenamento dos serviços.

As principais operações serão executadas através de Stored Procedures.

---

## Banco de Dados

Banco utilizado:

```sql
coguis_servicos
```

A principal tabela do projeto é:

```text
servicos
```

Estrutura:

```text
id
nome
descricao
categoria
preco
ativo
criado_em
atualizado_em
```

O projeto utiliza exclusão lógica.

```text
ativo = 1
```

Serviço ativo.

```text
ativo = 0
```

Serviço inativo.

Dessa forma, um serviço pode ser desativado sem que seu registro seja removido definitivamente do banco.

---

## Stored Procedures

O banco possui as seguintes procedures:

```text
sp_listar_servicos
sp_cadastrar_servico
sp_atualizar_servico
sp_desativar_servico
sp_ativar_servico
```

A documentação completa do banco está disponível em:

```text
database/README.md
```

---

## API Planejada

A API será responsável pelas seguintes operações:

```http
GET /servicos
```

Listar serviços.

```http
POST /servicos
```

Cadastrar serviço.

```http
PUT /servicos/:id
```

Atualizar serviço.

```http
PATCH /servicos/:id/desativar
```

Desativar serviço.

```http
PATCH /servicos/:id/ativar
```

Reativar serviço.

---

## Estrutura do Serviço

Cada serviço possui os seguintes dados:

```json
{
  "id": 1,
  "nome": "Formatação de Computador",
  "descricao": "Instalação do sistema operacional, drivers e atualizações",
  "categoria": "Manutenção",
  "preco": 100.00,
  "ativo": 1
}
```

---

## Documentação

Cada camada do projeto terá sua própria documentação.

```text
README.md
```

Visão geral do projeto.

```text
database/README.md
```

Documentação do banco de dados e Stored Procedures.

```text
backend/README.md
```

Documentação da API, dependências, rotas e execução do backend.

```text
frontend/README.md
```

Documentação da aplicação React, componentes e integração com a API.

---

## Próximas Etapas

As próximas etapas previstas são:

1. Desenvolver o backend com Node.js e Express.
2. Configurar a conexão com o MySQL.
3. Criar as rotas REST.
4. Testar os endpoints da API.
5. Desenvolver o frontend com React.
6. Integrar React com a API.
7. Implementar ativação e desativação de serviços.
8. Adicionar validações e tratamento de erros.
9. Melhorar a interface da aplicação.

---

## Autor

**Luan Araujo**

Projeto desenvolvido para estudo e portfólio na área de desenvolvimento de sistemas.