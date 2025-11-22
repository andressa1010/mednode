import { Request, Response } from "express";
import { gerarDiagnosticoIA } from "../Services/iaServices.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const gerarDiagnostico = async (req: Request, res: Response) => {
  try {
    const { texto } = req.body;

    if (!texto) {
      return res.status(400).json({ erro: "O texto da consulta é obrigatório." });
    }

    const resultadoIA = await gerarDiagnosticoIA(texto);

    const novaConsulta = await prisma.consulta.create({
      data: {
        texto,
        diagnostico: resultadoIA.diagnosticoProvavel,
        doencas: resultadoIA.doencasAssociadas,
        exames: resultadoIA.examesSugeridos,
        medicamentos: resultadoIA.medicamentosComuns
      }
    });

    return res.json({
      mensagem: "Diagnóstico gerado e salvo com sucesso!",
      consulta: novaConsulta
    });

  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: "Erro ao gerar diagnóstico." });
  }
};

