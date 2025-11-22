import { Router } from "express";
import { transcreverAudio } from "../Controllers/transcricaoControllers.js";
import { uploadAudio } from "../Config/multer.js";
const router = Router();
router.post("/", uploadAudio.single("audio"), transcreverAudio);
export default router;
