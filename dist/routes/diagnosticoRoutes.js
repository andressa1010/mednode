import { Router } from "express";
import { gerarDiagnostico } from "../Controllers/diagnosticoControllers.js";
const router = Router();
router.post("/", gerarDiagnostico);
export default router;
