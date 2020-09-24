import Contacts from '../models/contacts'
export default new class contactsControllers {
    async save(req, res) {
        try {
            const contacts = new Contacts(req.body);
            const savedcontacts = await contacts.save({});
            if(savedcontacts){
                return res.status(200).send({
                    message:"message saved Successifully",
                    data:savedcontacts
                })
            }
            else
            {
                return res.status(400).send({
                    message: "Data not Found"
                })
            }
            
        } catch (error) {
            return res.status(500).send({
                error: error.message
            })
        }
    
}

}

