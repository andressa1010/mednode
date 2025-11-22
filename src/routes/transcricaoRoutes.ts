import { Router } from "express";
import { transcreverAudio } from "../Controllers/transcricaoControllers";
import { uploadAudio } from "../Config/multer";


const router = Router()


router.post("/", uploadAudio.single("audio"), transcreverAudio);

export default router