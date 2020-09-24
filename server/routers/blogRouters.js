import express from 'express';
import blogControllers from "../controllers/blogControllers";

const blogRouters = express.Router();



blogRouters.put('/blogs/:id',blogControllers.update)


export default blogRouters