import mongoose,{Schema} from 'mongoose'

const CommentSchema = new Schema({
    
    body:{
        type:String,
        required:true
    }
    
},{timestamps:true})


const Comment = mongoose.model('Comment',CommentSchema);
export default Comment;