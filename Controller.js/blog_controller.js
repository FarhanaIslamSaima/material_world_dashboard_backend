import blogmodel from "../model/blogModel.js";

export const addPost=async(req,res)=>{
    try{
        
        const newBlog=new blogmodel(req.body);
        newBlog.save();
        res.status(200).json(req.body);

    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}
export const getPost=async(request,response)=>{
    try{
        const data=await blogmodel.find({})
        response.status(200).json(data);

    }
    catch(error){
        response.status(500).json(error)

    }

}