import User from '../models/user'
export default new class userControllers {

    async save(req, res){
        try {
            const user = new User(req.body);
            const savedUser = await user.save();
            if(savedUser){
                return res.status(200).send({
                    message:"Data saved Success",
                    data:savedUser
                })
            }
            else
            {
                return res.status(400).send({
                    error:"Data Not Saved!!"
                })
            }
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
        
    }

   
}