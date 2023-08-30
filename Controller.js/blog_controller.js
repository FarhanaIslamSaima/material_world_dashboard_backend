export const textCheck=async(request,response)=>{
    try{
        console.log("Hello Whatsapp");
        response.status(200).json("Hello Whats Up");

    }
    catch(error){
        response.status(500).json(error);
    }

}