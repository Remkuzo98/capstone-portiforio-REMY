import Blog from '../models/blog'
export default new class blogControllers {
    async getbyId(req, res){
        try {
            const blog = await Blog.findOne({_id:req.params.id});
            if(blog){
                return res.status(200).send({
                    message: 'Blog Found',
                    data: {
                        blog
                    }})
            }
            else
            {
                return res.status(404).send({
                    message: 'Blog not Found'
                })
            }
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
    }
    

    
}


