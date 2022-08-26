import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true,
  },
});

// Criar Usuários
app.post("/user", async (req: Request, res: Response) => {
  try {
    await connection("user").insert({
      nick_name: req.body.nick_name,
      name: req.body.name,
      email: req.body.email,
    });

    res.send("Usuário com sucesso!");
  } catch (error) {
    res.status(500).send("Usuário não foi criado ou existente");
  }
});
// Pegar Todos Usuários
app.get("/user", async (req: Request, res: Response) => {
  try {
    const allUser = await connection("user").select("*");

    res.status(200).send(allUser);
  } catch (error) {
    res.status(500).send("erro ao consultar");
  }
});
// Pegar Usário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userId:number = Number (req.params.id);
    const uniqueUser = await connection("user")
      .select("*")
      .where({ id: userId });

    if (!uniqueUser) {
      errorCode = 422;
      throw new Error("Valor errado para o id");
    }
    res.status(200).send(uniqueUser);
  } catch (error) {
    res.status(errorCode).send({ message: error });
  }
});

// Editar Usuário
app.put("/users/edits/:id", async (req: Request, res: Response) => {
  const userId:number = Number (req.params.id);
const {nameUser, nickNameUser, email} = req.body
const errorCode = 400;
  try {
  await connection("user")
    .where({ id: userId })
    .from("user")
     .update({
      nick_name: nickNameUser,
      name: nameUser,
      email: email

    })
  res.status(200).send("Usuário Alterado")
} catch (error:any) {
    console.log(error.message)
 res.status(errorCode).send({ message: error.message });
}
});

// deletar usuário
app.delete("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userId:number = Number (req.params.id);
    const uniqueUser = await connection("user")
      .delete("*")
      .where({ id: userId });

    if (!uniqueUser) {
      errorCode = 422;
      throw new Error("Valor errado para o id");
    }
    res.status(200).send("Usuário deletado!");
  } catch (error:any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/task", async(req:Request, res:Response)=>{
    const {idTable,titleTable, descriptionTable, dateTable, creatorUseId } = req.body
    console.log(idTable,titleTable, descriptionTable, dateTable, creatorUseId)
    try {
        await connection("task")
        .insert({
            id: idTable,
            title: titleTable,
            description_task: descriptionTable,
            limitdate: dateTable,
            creator_user_id: creatorUseId,

        })
        if(!idTable || !titleTable || !descriptionTable || !dateTable || !creatorUseId){
            throw new Error ("Pendente de informção")
        }

        res.status(200).send("Tarefa criada com sucesso!")
    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
})
app.get("/task/:id", async(req:Request, res:Response)=>{
    const tableId:number = Number(req.params.id)
    let errorCode = 400;
    try {
        const uniqueTable = await connection("task")
        .select ("*")
        .where({id:tableId})
         if (!uniqueTable || undefined || NaN) {
      errorCode = 422;
      throw new Error("id Inexistente");
    }
    res.status(200).send(uniqueTable);
    } catch (error) {
         res.status(errorCode).send({ message: error });
    }
})
app.listen(3003, () => {
  console.log("Server is Running...");
});
