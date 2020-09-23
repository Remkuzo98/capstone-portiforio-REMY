import User from '../models/user'
export default new class userControllers {

    async delete(req, res){
        try {
            const user = User.findOne({_id:req.params.id});
            if(!user){
                return res.status(400).send({
                    message:"user not Found"
                })
            }
            await user.remove();
            return res.status(400).send({
                message:"User removed "
            })

        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
    
        
    }

   
}