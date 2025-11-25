📁 Backend — MedNode (Copiloto Médico)
🧠 Sobre o projeto

Este é o backend de um Copiloto Médico, desenvolvido com Node.js, Express, TypeScript, Prisma ORM e MongoDB, com integração à API da OpenAI para:

Chat médico com IA (GPT-4o-mini)

Transcrição de áudio (Whisper-1)

Registro de histórico de consultas

O objetivo é simular um assistente médico inteligente, capaz de conversar, registrar interações e transcrever áudios enviados pelo usuário.

🛠️ Tecnologias Utilizadas

Node.js

Express

TypeScript

Prisma ORM

MongoDB (Atlas ou local)

Multer (upload de arquivos)

OpenAI API

Modelo de chat: gpt-4o-mini

Modelo de áudio: whisper-1

📂 Estrutura do Projeto
src/
├── config/
│   ├── prisma.ts
│   └── multer.ts
├── controllers/
│   ├── chatControllers.ts
│   ├── diagnosticoControllers.ts
│   ├── historicoControllers.ts
│   └── transcricaoControllers.ts
├── routes/
│   ├── chatRoutes.ts
│   ├── diagnosticoRoutes.ts
│   ├── historicoRoutes.ts
│   └── transcricaoRoutes.ts
├── services/
│   └── iaServices.ts
└── server.ts

⚙️ Configuração do Projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/seu-backend.git
cd seu-backend

2. Instalar dependências
npm install

3. Criar o arquivo .env

Crie um arquivo .env na raiz do projeto:

PORT=3333
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/mednode"
OPENAI_API_KEY="sua-chave-da-openai"

4. Configurar o Prisma (MongoDB)
npx prisma generate


Se quiser visualizar:

npx prisma studio

▶️ Rodar o projeto

Modo desenvolvimento:

npm run dev


Modo produção:

npm run build
npm start

🔥 Rotas da API
✅ Rota de teste
GET /


Resposta:

"Api Copilot médico funcionando!"

🤖 Chat com IA
POST /api/chat


Body (JSON):

{
  "mensagens": [
    {
      "role": "user",
      "content": "Estou com dor de cabeça"
    }
  ]
}

🎤 Transcrição de Áudio (Whisper)
POST /api/transcricao


Envio por form-data:

key: audio

value: arquivo .mp3 ou .wav

📝 Diagnósticos
POST /api/diagnostico
GET  /api/consultas

🌐 Deploy

Este backend pode ser facilmente hospedado no:

Render

Railway

Heroku

Vercel (API Routes)

✅ Status

✔ API funcionando
✔ Banco MongoDB integrado
✔ OpenAI integrada (Chat + Áudio)
✔ Prisma conectado corretamente
