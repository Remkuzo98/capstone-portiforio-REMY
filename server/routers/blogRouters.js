import express from 'express';
import blogControllers from "../controllers/blogControllers";

const blogRouters = express.Router();



blogRouters.delete('/blogs/:id',blogControllers.delete)


export default blogRouters