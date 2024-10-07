Para consumir um DB usando orm PRISMA

iniciando o projeto:
npm init -y

Instale o Prisma e as dependências necessárias:
npm install prisma @prisma/client

Inicialize o Prisma e configure a conexão com o banco de dados existente:
npx prisma init

Configure a URL do banco de dados no .env:
DATABASE_URL="mysql://usuario:senha@localhost:3306/meu_banco"

Mapeie o esquema existente com o Prisma:
npx prisma db pull

Gere o cliente Prisma:
npx prisma generate

criar uma pasta na raiz do projeto chamada src
criar os arquivos app.ts e server.ts
