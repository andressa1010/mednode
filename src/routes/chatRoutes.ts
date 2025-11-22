import { Router } from "express";
import { chatMedico } from "../Controllers/chatControllers";


const router = Router()


router.post("/", chatMedico)

export default router