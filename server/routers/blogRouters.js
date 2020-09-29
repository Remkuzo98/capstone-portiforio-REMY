import express from 'express';
import blogControllers from "../controllers/blogControllers";
import checkAuth from "../middlewares/checkAuth"
const blogRouters = express.Router();



blogRouters.delete('/api/blogs/:id',checkAuth,blogControllers.delete)


export default blogRouters