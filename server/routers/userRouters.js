import express from 'express';
import checkAuth from '../middlewares/checkAuth';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();




userRouters.get('/api/users/:id',userControllers.getbyId)




export default userRouters