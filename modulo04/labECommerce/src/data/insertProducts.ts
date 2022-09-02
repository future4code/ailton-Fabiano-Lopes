import { typeProdutcs} from "../types/typePoduct"
import { connection } from "./connection";

export async function insertProducts(product:typeProdutcs) :Promise <string> {
  const { name,price,image}= product
  
     await connection("labecommerce_products").insert({
      name,
      price,
      image  
    })

    return `Produto ${name} cadastrado com sucesso!`
  }