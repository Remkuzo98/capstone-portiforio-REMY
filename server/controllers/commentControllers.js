import Comment from '../models/comment'
export default new class commentControllers {
    async getAll(req, res) {
        try {
            const comment = await Comment.find({});
            if(comment){
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

