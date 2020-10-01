import express from 'express';
import checkAuth from '../middlewares/checkAuth';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();



userRouters.put('/api/users/:id',checkAuth,userControllers.update)


export default userRouters