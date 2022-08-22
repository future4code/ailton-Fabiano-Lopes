import express, {Express, Request,Response} from "express";
import cors from "cors";
import { AccountType, account } from "./data";

const app:Express = express();
app.use(express.json())
app.use(cors());

app.post("/users/create", (req:Request, res:Response)=>{
  try {
    const {user, cpf, birthDateAsString} = req.body
    const [day, month, year]= birthDateAsString.split("/")
    const birthDate: Date = new Date(`${year}-${month}-${day}`)
    const ageMil:number = Date.now() - birthDate.getTime()
    const ageYear:number = ageMil /1000 / 60 /60 /24 /365
    if (ageYear <= 18){
      res.statusCode = 406
      throw new Error ("Menor de 18 anos, não pode criar uma conta")
    }
    account.push({
      user,
      cpf,
      birthDate,
      balance: 0,
      statement:[]
    })
    res.status(201).send("Conta criada com suceso")
  } catch (error) {
    res.send(error)    
  }
})

app.get("/users/all",(req:Request, res:Response)=>{

try {
  if (!account.length){
    res.statusCode = 404
    throw new Error("Nenhuma Conta Encontrada");
    
  }
  res.status(200).send(account)
  
} catch (error) {
  res.send(error)
}
})
//http://localhost:3003
app.listen(3003, () => {
  console.log("Server is running...");
});
