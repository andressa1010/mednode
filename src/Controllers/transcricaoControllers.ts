import { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const transcreverAudio = async (req: Request, res: Response) => {
  try {
    console.log("Arquivo recebido:", req.file);

    if (!req.file) {
      return res.status(400).json({ erro: "Nenhum áudio enviado." });
    }

    // buffer → Uint8Array
    const bufferAudio = req.file.buffer;
    const uintArray = new Uint8Array(bufferAudio);

    // Cria arquivo para enviar à OpenAI
    const arquivoAudio = new File([uintArray], req.file.originalname, {
      type: req.file.mimetype,
    });

    // Chamada CORRETA para o Whisper
    const resposta = await openai.audio.transcriptions.create({
      file: arquivoAudio,
      model: "whisper-1",
    });

    return res.json({
      mensagem: "Transcrição realizada com sucesso!",
      transcricao: resposta.text,
    });

  } catch (erro) {
    console.error("Erro na transcrição:", erro);
    return res.status(500).json({ erro: "Erro ao transcrever áudio." });
  }
};
