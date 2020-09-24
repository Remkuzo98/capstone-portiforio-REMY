import express from 'express';
import contactsControllers from "../controllers/contactsControllers";

const contactsRouters = express.Router();



contactsRouters.post('/contacts', contactsControllers.save);


export default contactsRouters