import express from 'express';
import commentRouters from "./server/routers/contactsRouters";

 require ('./server/config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(commentRouters)



export default app