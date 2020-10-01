import express from 'express';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();


userRouters.get('/users', userControllers.getAll);


export default userRouters