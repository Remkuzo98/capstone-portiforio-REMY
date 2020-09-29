import User from '../models/user'
export default new class userControllers {

    async update(req, res){
        const user = await User.findById({_id:req.params.id})
        const AllowedUpdates = ['fullname','username','email','password']
        const updates = Object.keys(req.body)
        const isValidOperation = updates.every((update) => AllowedUpdates.includes(update))
        if(!isValidOperation){
            return res.status(404).send({
                message: 'Invalid Data Fields Present'
            })
        }
        try {
            updates.forEach((update) => {
                user[update] = req.body[update]
            })
            await user.save()
            if(!user){
                return res.status(404).send({message:'An error occured'})
            }
            return res.status(200).send({
                message: 'user modified',
                data: {
                    user
                }})
        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    }
   
}