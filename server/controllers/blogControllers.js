import Blog from '../models/blog'
export default new class blogControllers {
    async getAll(req, res) {
        try {
            const blog = await Blog.find({});
            if(blog){
                return res.status(200).send({
                    message: "new Data is Here",
                    data : {
                        blog:blog
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
