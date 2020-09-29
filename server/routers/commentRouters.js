import express from 'express';
import checkAuth from '../middlewares/checkAuth';
import commentControllers from "../controllers/commentControllers";

const commentRouters = express.Router();



commentRouters.post('/api/comments',checkAuth,commentControllers.save);


export default commentRouters