import express from 'express';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();



userRouters.put('/users/:id',userControllers.update)


export default userRouters