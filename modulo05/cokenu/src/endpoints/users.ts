import {Request, Response} from "express"
import {UserData} from "../data/UserData"
import { MissingFields } from "../error/MissingFields"
import User from "../model/User"
import Authenticator from "../services/Authenticator"
import HashManager from "../services/HashManager"
import IdGenerator from "../services/IdGenerator"




class UserEndpoint{
   
async create(req: Request, res:Response){
 try {

    const {name, email, password}= req.body 
    if(!name || !email|| !password){
        throw new MissingFields()

    }

    if (password.length < 6){
        throw new Error ("Senha deve conter mais de 6 caracteres")
    }

    const userData = new UserData()

    const emailExist = await userData.getUserEmail(email)

    if (emailExist){
        throw new Error("email existente")
    }

    const id = new IdGenerator().idGenerator()
    const hashPassword = await new HashManager().hash(password)
    const userCreate =  new User(id, name, email,hashPassword)

    const response = await userData.createUser(userCreate)
    const token = new Authenticator().generateToken(id)

    res.status(201).send({message:response, token})

    console.log(userCreate)
    
 } catch (error:any) {
    res.status(error.statusCode || 500).send({message:error.message})
    
 }
}
}

export default UserEndpoint