# Guia de Instalação do Projeto

## Passos para Configuração

_OBS_: É importante destacar que para que o projeto funcione, antes de rodar as migrações, é preciso ter um servidor `PostgreSQL` rodando com um database chamado `desafio_neri`.

**1. Clone o repositório:**

```bash
git clone https://github.com/iuritorres/desafio-neri-api.git
```

**2. Dentro da pasta do projeto, instale as dependências:**

```bash
cd .\desafio-neri-api\
npm install
```

**3. Crie um novo arquivo na raiz do projeto como o nome `.env`, e preencha as variáveis seguindo o padrão proposto no `.env.example`.**

**4. Execute as migrações do Prisma:**

```bash
npm run init-db
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Descrição do Projeto

Este projeto é uma API backend desenvolvida para o desafio técnico da Neri.
Ele utiliza Typescript, Node.js e Express.js para roteamento e Prisma como ORM de gerenciamento de banco de dados.

## Requisitos

-   Node.js v20.6 ou superior
