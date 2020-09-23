import express from 'express';
import blogRouters from "./server/routers/blogRouters";

 require ('./server/config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(blogRouters)



export default app