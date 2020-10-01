import User from '../models/user'
export default new class userControllers {
    async getAll(req, res) {
        try {
            const user = await User.find({});
            if(user){
                return res.status(200).send({
                    message: "new Data is Here",
                    data : {
                        user:user
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