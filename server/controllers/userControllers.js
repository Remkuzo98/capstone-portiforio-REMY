import User from '../models/user';
import bcrpty from 'bcrypt';
import jwt from 'jsonwebtoken';
export default new class userControllers {

    async save(req, res){
        try {
            const user = new User(req.body);
            const savedUser = await user.save();
            if(savedUser){
                let token = jwt.sign({
                    username: savedUser.username,
                    email: savedUser.email,
                    userId : savedUser._id
                }, process.env.jwtKey, { expiresIn: "1h" }
                );
                
                return res.status(200).send({
                    message:" saved Successifully",
                    data:savedUser,
                    token: token

                })
            }
            else
            {
                return res.status(404).send({
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