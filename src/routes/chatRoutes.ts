import { Router } from "express";
import { chatMedico } from "../Controllers/chatControllers.js";


const router = Router()


router.post("/", chatMedico)

export default router