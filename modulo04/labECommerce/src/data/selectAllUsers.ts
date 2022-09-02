import { typeInsert, typeUsers } from "../types/typeUsers";
import { connection } from "./connection";

const typeSelect = (userSelect:any)=>{
    const selectCreate:typeInsert ={
        id:userSelect.id,
        name: userSelect.name,
        email:userSelect.email,
        password:userSelect.password
    }
    return selectCreate
}

export default async function selectAllUsers():Promise <typeInsert[] | undefined > {
    const result= await connection("labecommerce_users")
   const allSelectUser =   result.map((user)=>{
    return typeSelect(user)
})

return result
}