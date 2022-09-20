import express, { request, response } from "express";
import cors from "cors";
import { dataExpress, userData } from "./data";

const app = express()
app.use(cors())
app.use(express.json())


//Exercicio 1
// app.get ("/ping", (request, response)=>{
//     response.send("pong")
// })


//Exercicio 4

app.get("/allChores", (request, response)=>{
    response.send(dataExpress)
})


app.post("/createChores", (request, response)=>{

    const {userId, id, title,completed} = request.body
    const newData:userData = {
        userId,
        id,
        title,
        completed,
    }

    dataExpress.push(newData)
    response.send(dataExpress)
})






app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003")
})