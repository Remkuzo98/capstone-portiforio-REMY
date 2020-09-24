import mongoose,{Schema} from 'mongoose'

const ContactsSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    
    body:{
        type:String,
        required:true
    }
    
},{timestamps:true})


const Contacts = mongoose.model('Contacts',ContactsSchema);
export default Contacts;