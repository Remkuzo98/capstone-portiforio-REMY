import express from 'express';
import checkAuth from '../middlewares/checkAuth';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();




userRouters.post('/api/users', userControllers.save);


export default userRouters