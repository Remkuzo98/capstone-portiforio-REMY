import Comment from '../models/comment'
export default new class commentControllers {

    async save(req, res){
        try {
            const comment = new Comment(req.body);
            const savedComment = await comment.save();
            if(savedComment){
                return res.status(200).send({
                    message:"comment has been sent",
                    data:savedComment

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

