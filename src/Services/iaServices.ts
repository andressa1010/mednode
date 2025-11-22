import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const gerarDiagnosticoIA = async (texto: string) => {
  const resposta = await openai.chat.completions.create({
    model: "gpt-4.1",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: `
Você é um médico especialista, extremamente preciso, direto e objetivo.
Analise os sintomas do paciente e gere o diagnóstico no seguinte EXATO formato JSON:

{
  "diagnosticoProvavel": "string",
  "doencasAssociadas": ["string", "string"],
  "examesSugeridos": ["string", "string"],
  "medicamentosComuns": ["string", "string"]
}

Regras:
- Nunca adicione texto fora do JSON.
- Nunca coloque comentários.
- Nunca invente doenças impossíveis.
- Baseie-se em medicina real.
- Seja conservador ao sugerir medicamentos.
`
      },
      {
        role: "user",
        content: `Sintomas informados pelo paciente: ${texto}`
      }
    ]
  });

  const conteudo = resposta.choices[0].message.content || "{}";

  return JSON.parse(conteudo);
};

