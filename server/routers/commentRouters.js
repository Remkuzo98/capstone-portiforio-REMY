import express from 'express';
import commentControllers from "../controllers/commentControllers";

const commentRouters = express.Router();



commentRouters.get('/api/comments/:id', commentControllers.getAll);


export default commentRouters