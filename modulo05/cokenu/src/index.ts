
import {app} from "./app"
import { BaseDataBase } from "./data/BaseDataBase"
import IdGenerator  from "./services/IdGenerator"
import UserEndpoint from "./endpoints/users"
const userEndpoint = new UserEndpoint()

app.post("/createUser",userEndpoint.create)
