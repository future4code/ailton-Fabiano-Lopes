import { typeInsert } from "../types/typeUsers";
import { connection } from "./connection";

export async function insertUsers(user:typeInsert) :Promise <string> {
  const { name,email,password}= user
  
     await connection("labecommerce_users").insert({
      name,
      email,
      password  
    })

    return `Usuário ${name} criado com sucesso!`
  }