import Blog from '../models/blog'
export default new class blogControllers {
    async delete(req, res){
        try {
            const blog = Blog.findOne({_id:req.params.id});
            if(!blog){
                return res.status(400).send({
                    message:"Blog not Found"
                })
            }
            await blog.remove();
            return res.status(400).send({
                message:"Blog removed "
            })

        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
    }
    
}


