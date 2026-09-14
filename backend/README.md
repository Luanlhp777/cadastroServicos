# Backend - Cadastro de Serviços

Backend da aplicação **Cadastro de Serviços**, desenvolvido com Node.js e Express.

A API é responsável pela comunicação entre o frontend e o banco de dados MySQL, utilizando Stored Procedures para executar as operações relacionadas aos serviços.

---

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL2
- CORS
- dotenv
- Nodemon

---

## Estrutura Atual

```text
backend/
├── app.js
├── db.js
├── package.json
├── package-lock.json
└── README.md
```

As credenciais de conexão com o banco são armazenadas em variáveis de ambiente e não devem ser versionadas no GitHub.

---

## Configuração

Instale as dependências:

```bash
npm install
```

Para executar em modo de desenvolvimento:

```bash
npm run dev
```

Para executar normalmente:

```bash
npm start
```

---

## Variáveis de Ambiente

O backend utiliza um arquivo `.env` com as configurações necessárias para acessar o banco.

Exemplo:

```env
DB_HOST=SEU_HOST
DB_PORT=3306
DB_USER=SEU_USUARIO
DB_PASSWORD=SUA_SENHA
DB_NAME=coguis_servicos

PORT=3006
```

> O arquivo `.env` não deve ser enviado ao GitHub.

---

## Servidor

Por padrão, a API é executada em:

```text
http://localhost:3006
```

---

## Banco de Dados

Banco utilizado:

```text
coguis_servicos
```

A comunicação com o MySQL é realizada utilizando:

```text
mysql2/promise
```

O backend utiliza um pool de conexões para realizar as consultas.

---

## Stored Procedures Utilizadas

A API utiliza as seguintes Stored Procedures:

```text
sp_listar_servicos
sp_cadastrar_servico
sp_atualizar_servico
sp_desativar_servico
sp_ativar_servico
```

A documentação completa do banco está disponível em:

```text
../database/README.md
```

---

# Endpoints

## Listar Serviços

```http
GET /servicos
```

Retorna todos os serviços cadastrados.

Exemplo:

```http
GET http://localhost:3006/servicos
```

Resposta:

```json
[
  {
    "id": 1,
    "nome": "Formatação de Computador",
    "descricao": "Instalação do sistema operacional, drivers e atualizações",
    "categoria": "Manutenção",
    "preco": "100.00",
    "ativo": 1
  }
]
```

---

## Cadastrar Serviço

```http
POST /servicos
```

Body:

```json
{
  "nome": "Manutenção Preventiva",
  "descricao": "Limpeza, testes e verificação geral do equipamento",
  "categoria": "Manutenção",
  "preco": 120.00
}
```

Resposta esperada:

```http
201 Created
```

Exemplo:

```json
{
  "mensagem": "Serviço cadastrado com sucesso.",
  "servico": {
    "id": 9,
    "nome": "Manutenção Preventiva",
    "descricao": "Limpeza, testes e verificação geral do equipamento",
    "categoria": "Manutenção",
    "preco": 120,
    "ativo": 1
  }
}
```

---

## Atualizar Serviço

```http
PUT /servicos/:id
```

Exemplo:

```http
PUT /servicos/9
```

Body:

```json
{
  "nome": "Manutenção Preventiva Completa",
  "descricao": "Limpeza interna, testes, diagnóstico e verificação geral do equipamento",
  "categoria": "Manutenção",
  "preco": 150.00
}
```

Resposta esperada:

```http
200 OK
```

---

## Desativar Serviço

```http
PATCH /servicos/:id/desativar
```

Exemplo:

```http
PATCH /servicos/9/desativar
```

Não é necessário enviar Body.

O serviço não é removido do banco.

O campo:

```text
ativo
```

passa para:

```text
0
```

---

## Ativar Serviço

```http
PATCH /servicos/:id/ativar
```

Exemplo:

```http
PATCH /servicos/9/ativar
```

Não é necessário enviar Body.

O campo:

```text
ativo
```

volta para:

```text
1
```

---

## Status HTTP Utilizados

| Status | Significado |
|---|---|
| `200` | Operação realizada com sucesso |
| `201` | Registro criado com sucesso |
| `400` | Dados obrigatórios não informados |
| `404` | Serviço não encontrado |
| `500` | Erro interno da API |

---

## Testes da API

Os endpoints foram testados utilizando o **Thunder Client**.

Operações testadas:

- [x] Listagem de serviços
- [x] Cadastro de serviço
- [x] Atualização de serviço
- [x] Desativação de serviço
- [x] Reativação de serviço

---

## Status do Backend

✅ Estrutura inicial funcional.

### Concluído

- [x] Configuração do Node.js
- [x] Express
- [x] CORS
- [x] dotenv
- [x] MySQL2
- [x] Conexão com MySQL
- [x] Pool de conexões
- [x] GET `/servicos`
- [x] POST `/servicos`
- [x] PUT `/servicos/:id`
- [x] PATCH `/servicos/:id/desativar`
- [x] PATCH `/servicos/:id/ativar`
- [x] Tratamento básico de erros
- [x] Testes com Thunder Client

---

## Próximas Melhorias

- Separar rotas e controllers
- Melhorar validações
- Criar middleware de tratamento de erros
- Criar consulta de serviço por ID
- Implementar frontend em React
- Integrar frontend e backend