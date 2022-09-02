import { app } from "./app";
import { createProduts } from "./endpoints/createProducts";
import { createUsers } from "./endpoints/createUsers";
import { getAllUsers } from "./endpoints/getAllUsers";




app.post("/users",createUsers)
app.get("/users", getAllUsers)

app.post("/products",createProduts)


