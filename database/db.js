import mongoose from "mongoose";

export const connection=async()=>{
    try{
        await mongoose.connect(`mongodb+srv://admin:WwATLlvFSK3aItyF@mw-db.efrrrpm.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Database connected successfully");

    }
    catch(error){
        return error;
    }

}