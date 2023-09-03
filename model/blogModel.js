import mongoose from "mongoose";
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    cat:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set to the current date and time
      },
})
const blogmodel=mongoose.model('blog',blogSchema);
export default blogmodel;