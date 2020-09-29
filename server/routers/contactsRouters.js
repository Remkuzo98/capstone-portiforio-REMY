import express from 'express';
import checkAuth from '../middlewares/checkAuth';
import contactsControllers from "../controllers/contactsControllers";

const contactsRouters = express.Router();



contactsRouters.post('/api/contacts',checkAuth,contactsControllers.save);


export default contactsRouters