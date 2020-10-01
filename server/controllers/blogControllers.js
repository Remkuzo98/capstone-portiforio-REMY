import Blog from '../models/blog'
export default new class blogControllers {

    async update(req, res){
        const blog = await Blog.findById({_id:req.params.id})
        const AllowedUpdates = ['tittle','date','body']
        const updates = Object.keys(req.body)
        const isValidOperation = updates.every((update) => AllowedUpdates.includes(update))
        if(!isValidOperation){
            return res.status(404).send({
                message: 'Invalid Data Fields Present'
            })
        }
        try {
            updates.forEach((update) => {
                blog[update] = req.body[update]
            })
            await blog.save()
            if(!blog){
                return res.status(404).send({message:'An error occured'})
            }
            return res.status(200).send({
                message: 'Blog modified',
                data: {
                    blog
                }})
        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    }
    
}



