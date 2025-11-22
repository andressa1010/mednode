import { Router } from "express";
import { gerarDiagnostico } from "../Controllers/diagnosticoControllers";


const router = Router()


router.post("/", gerarDiagnostico)

export default router