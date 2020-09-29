import express from 'express';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();


userRouters.get('/api/users', userControllers.getAll);


export default userRouters