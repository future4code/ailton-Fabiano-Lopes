import User from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase{
    
    private static tableName = "user_cookenu"
    async getUserEmail(email:string): Promise<User | undefined>{
        const result = await this.getConnection()
        .select("*")
        .from(UserData.tableName)
        .where ({email})    

            if (!result.length){
                return undefined
            }
        return new User(result[0].id, result[0].name, result[0].email, result[0].password)
    }

      async createUser(user:User):Promise<string>{

        await this.getConnection().insert({
            id: user.getId ,
            email:user.getEmail ,
            name: user.getName ,
            password: user.getPassword 
        }).into(UserData.tableName)

        return  "Usuário Cadastrado com sucesso"
        
    }
    
    
}
