import  express, { response } from "express";
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"
const app = express()

app.use(bodyParser.json());

app.use("/users", usersRoutes)

app.get("/", (request, response) => {
    response.send("hello from the server")
})

app.listen(3000, () => {
    console.log(`server is running`)
})
