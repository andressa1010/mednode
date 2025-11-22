import { Router } from "express";
import { listarConsultas } from "../Controllers/historicoControllers.js";


const router = Router()

router.get("/", listarConsultas)

export default router