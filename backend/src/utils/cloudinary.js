import {v2 as cloudinary} from "cloudinary"
import { log } from "console"
import fs from "fs"
 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary= async (localFIlePath)=>{
    try {
        if(!localFIlePath) return null
        const response= await cloudinary.uploader.upload(localFIlePath,{
            resource_type:"auto"

        })
        console.log("FIle is uploaded on cloudinary URL: ", response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(  localFIlePath)  //remove the locally saved file as the file upload is failed
    }

}