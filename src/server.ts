import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import historicoRoutes from "./routes/historicoRoutes"
import diagnosticoRoutes from "./routes/diagnosticoRoutes"
import transcricaoRoutes from "./routes/transcricaoRoutes"
import chatRoutes from "./routes/chatRoutes"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())


app.use("/api/diagnostico", diagnosticoRoutes)
app.use("/api/transcricao", transcricaoRoutes)
app.use("/api/consultas", historicoRoutes)
app.use("/api/chat", chatRoutes)


app.get("/", (req,res)=>{
     res.send("Api Copilot médico funcionando!")
})

app.listen(3001, ()=>{
    console.log("Api rodando na porta http://localhost:3001")
})
