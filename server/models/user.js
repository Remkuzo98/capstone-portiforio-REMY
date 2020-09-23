import mongoose,{Schema} from 'mongoose'

const UserSchema = new Schema({
    fullname:{
        type:String,
        min:3,
        max:60,
        required:true
    },
    username:{
        type:String,
        min:3,
        max:60,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        min:6,
        max:15,
        required:true
    }
},{timestamps:true})


const User = mongoose.model('User',UserSchema);
export default User;