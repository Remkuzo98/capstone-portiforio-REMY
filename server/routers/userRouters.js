import express from 'express';
import userControllers from "../controllers/userControllers";

const userRouters = express.Router();



userRouters.delete('/users/:id',userControllers.delete)


export default userRouters