import express from 'express';
import commentControllers from "../controllers/commentControllers";

const commentRouters = express.Router();



commentRouters.post('/comments', commentControllers.save);


export default commentRouters