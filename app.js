import express from 'express';
import commentRouters from "./server/routers/commentRouters";

 require ('./server/config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(commentRouters)



export default app