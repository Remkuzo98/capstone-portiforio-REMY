import User from '../models/user';
import bcrpty from 'bcrypt';
import jwt from 'jsonwebtoken';
export default new class userControllers {


    async delete(req, res){
        try {
            const user = User.findOne({_id:req.params.id});
            if(!user){
                return res.status(404).send({
                    message:"user not Found"

   
                })

            }

            await user.remove();
            return res.status(200).send({
                message:"User removed "
            })

        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
    

    }

   
}