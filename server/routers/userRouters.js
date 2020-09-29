import express from 'express';
import userControllers from "../controllers/userControllers";
import checkAuth from "../middlewares/checkAuth";
const userRouters = express.Router();



userRouters.delete('/users/:id',checkAuth,userControllers.delete)


export default userRouters