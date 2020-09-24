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


// export default new class blogControllers {

//     async update(req, res){
//         const user = await User.findById({_id:req.params.id})
//         const AllowedUpdates = ['fullname','username','email']
//         const updates = Object.keys(req.body)
//         const isValidOperation = updates.every((update) => AllowedUpdates.includes(update))
//         if(!isValidOperation){
//             return res.status(404).send({
//                 message: 'Invalid Data Fields Present'
//             })
//         }
//         try {
//             updates.forEach((update) => {
//                 user[update] = req.body[update]
//             })
//             await user.save()
//             if(!user){
//                 return res.status(404).send({message:'An error occured'})
//             }
//             return res.status(200).send({
//                 message: 'user modified',
//                 data: {
//                     user
//                 }})
//         } catch (error) {
//             return res.status(400).send({
//                 message: error.message
//             })
//         }
//     }
   
// }