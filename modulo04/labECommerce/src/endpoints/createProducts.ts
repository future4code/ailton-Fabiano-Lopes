import { Request, Response } from "express";
import { typeProdutcs, selectTypeProdutcs} from "../types/typePoduct"
import { insertProducts } from "../data/insertProducts";



export async function createProduts(req:Request, res:Response) {
    try {
        const {name, price,image}:typeProdutcs= req.body

        if (!name || !price || !image){
            throw new Error ("Dados incoretos")
        }

        const products:selectTypeProdutcs = {
            id: Date.now().toString(),
            name,
            price,
            image
        }
    console.log(products)
        const result = await insertProducts (products)

        res.status(201).send({message:result})
    } catch (error:any) {
        res.status(500).send({message:error.message})
        
    }
}