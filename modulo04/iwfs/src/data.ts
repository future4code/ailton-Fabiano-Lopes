export type Transaction = {
  value: number,
  date: Date,
  description: string
}

export type AccountType = {
   user: string,
    cpf:string,
    birthDate: Date,
    balance: number,
    statement: Array<Transaction>
 
}

export const account:AccountType[] = [

]