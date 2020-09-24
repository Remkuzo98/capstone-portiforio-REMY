import Contacts from '../models/contacts'
export default new class contactsControllers {
    async getAll(req, res) {
        try {
            const contacts = await Contacts.find({});
            if(contacts){
                return res.status(200).send({
                    message: "new Data is Here",
                    data : {
                        comment: comment
                    }
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

