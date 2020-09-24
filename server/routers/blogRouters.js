import express from 'express';
import blogControllers from "../controllers/blogControllers";

const blogRouters = express.Router();



blogRouters.get('/blogs/:id',blogControllers.getbyId)


export default blogRouters