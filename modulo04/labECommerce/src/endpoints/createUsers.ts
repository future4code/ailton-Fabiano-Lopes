import { Request, Response } from "express";
import { typeInsert, typeUsers } from "../types/typeUsers";
import { insertUsers } from "../data/insertUsers";


export async function createUsers(req:Request, res:Response) {
    try {
        const {name, email,password}:typeUsers= req.body

        if (!name || !email || !password){
            throw new Error ("Dados incoretos")
        }

        const users:typeInsert = {
            id: Date.now().toString(),
            name,
            email,
            password
        }
        // console.log(users)
        const result = await insertUsers (users)
        res.status(201).send({message:result})
    } catch (error:any) {
        res.status(500).send({message:error.message})
        
    }
}