import { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatMedico = async (req: Request, res: Response) => {
  try {
    const { mensagem } = req.body;

    if (!mensagem || mensagem.trim() === "") {
      return res.status(400).json({ erro: "Nenhuma mensagem enviada." });
    }

    // 🔥 NOVA API DA OPENAI
    const resposta = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content:
            "Você é um médico experiente. Explique tudo de forma clara, cuidadosa e responsável."
        },
        {
          role: "user",
          content: mensagem
        }
      ]
    });

    // 🔥 Pegando texto da resposta (formato novo)
    const textoResposta = resposta.output_text;

    return res.json({
      resposta: textoResposta
    });

  } catch (erro) {
    console.error("Erro no chat:", erro);
    return res.status(500).json({ erro: "Erro ao gerar resposta do médico." });
  }
};
