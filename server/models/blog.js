import mongoose,{Schema} from 'mongoose'

const BlogSchema = new Schema({
    title:{
        type:String,
        min:3,
        max:100,
        required:true
    },
    date:{
        type:Date,
        
        required:true
    },
    body:{
        type:String,
        min:10,
        required:true
    },
    
},{timestamps:true})


const Blog = mongoose.model('Blog',BlogSchema);
export default Blog;