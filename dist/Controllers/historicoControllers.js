import prisma from "../Config/prisma.js";
export const listarConsultas = async (req, res) => {
    try {
        const listaDeConsulta = await prisma.consulta.findMany();
        return res.status(200).json(listaDeConsulta);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao listar consultas." });
    }
};
