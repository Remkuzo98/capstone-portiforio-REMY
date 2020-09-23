import express from 'express';
import blogControllers from "../controllers/blogControllers";

const blogRouters = express.Router();



blogRouters.post('/blogs',blogControllers.save)


export default blogRouters