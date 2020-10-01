import express from 'express';

import checkAuth from '../middlewares/checkAuth'

import blogControllers from "../controllers/blogControllers";

const blogRouters = express.Router();




blogRouters.put('/api/blogs/:id',checkAuth,blogControllers.update)



export default blogRouters