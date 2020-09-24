import express from 'express';
import contactsControllers from "../controllers/contactsControllers";

const contactsRouters = express.Router();



contactsRouters.get('/contacts', contactsControllers.getAll);


export default contactsRouters