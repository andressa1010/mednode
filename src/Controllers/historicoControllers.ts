import { Request, Response } from "express";
import prisma from "../Config/prisma";


export const listarConsultas = async (req: Request, res: Response)=>{
     try{
        const listaDeConsulta = await prisma.consulta.findMany()

       return res.status(200).json(listaDeConsulta)
     }
     catch(error){
        console.error(error);
    return res.status(500).json({ erro: "Erro ao listar consultas." });
     }
}
