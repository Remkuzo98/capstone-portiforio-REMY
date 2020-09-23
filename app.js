import express from 'express';
import userRouters from "./server/routers/userRouters";

 require ('./server/config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(userRouters)



export default app