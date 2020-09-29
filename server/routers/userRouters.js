import express from 'express';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();



userRouters.post('/api/users', userControllers.save);


export default userRouters