import express from 'express';

import blogControllers from "../controllers/blogControllers";

import checkAuth from "../middlewares/checkAuth"


const blogRouters = express.Router();




blogRouters.post('/api/blogs',blogControllers.save)



export default blogRouters