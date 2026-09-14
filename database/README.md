# Cadastro de Serviços

Sistema de cadastro e gerenciamento de serviços desenvolvido como projeto de estudo e portfólio.

O projeto será utilizado para praticar a integração entre **Frontend, Backend e Banco de Dados**, utilizando tecnologias modernas de desenvolvimento web.

## Objetivo

Desenvolver uma aplicação completa para cadastro e gerenciamento de serviços, aplicando conceitos de:

- Banco de Dados
- API REST
- Backend
- Frontend
- Integração entre sistemas
- Versionamento com Git e GitHub

## Tecnologias

### Banco de Dados

- MySQL
- Stored Procedures

### Backend

- Node.js
- Express
- MySQL2

### Frontend

- React
- JavaScript
- Vite

### Versionamento

- Git
- GitHub

## Estrutura do Projeto

```text
cadastro-servicos/
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
├── backend/
│   └── README.md
│
├── frontend/
│   └── README.md
│
├── .gitignore
└── README.md
```

## Status do Projeto

🚧 Projeto em desenvolvimento.

### Banco de Dados

- [x] Criação do banco `coguis_servicos`
- [x] Criação da tabela `servicos`
- [x] Cadastro inicial de serviços
- [x] Procedure para listar serviços
- [x] Procedure para cadastrar serviços
- [x] Procedure para atualizar serviços
- [x] Procedure para desativar serviços
- [x] Procedure para ativar serviços

### Backend

- [ ] Configuração do Node.js
- [ ] Configuração do Express
- [ ] Conexão com MySQL
- [ ] Configuração das variáveis de ambiente
- [ ] Criação da API REST
- [ ] Rota para listar serviços
- [ ] Rota para cadastrar serviços
- [ ] Rota para atualizar serviços
- [ ] Rota para desativar serviços
- [ ] Rota para ativar serviços

### Frontend

- [ ] Configuração do React com Vite
- [ ] Cadastro de serviços
- [ ] Listagem de serviços
- [ ] Alteração de serviços
- [ ] Ativação e desativação de serviços
- [ ] Integração com a API

## Arquitetura Planejada

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

## Documentação

Cada camada do projeto terá sua própria documentação.

```text
README.md
→ Visão geral do projeto

database/README.md
→ Documentação do banco de dados

backend/README.md
→ Documentação da API e do backend

frontend/README.md
→ Documentação da aplicação React
```

## Próxima Etapa

Desenvolvimento do backend utilizando **Node.js + Express** e integração com o banco MySQL.

## Autor

**Luan Araujo**