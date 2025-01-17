import mongoose,{Schema} from "mongoose";
const videoSchema=new Schema({
videoFile:{
    type:String,
    required:true

},
thumbnail:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
},
descriprion:{
    type:String,
    required:true
},
duration:{
    type:Number,
    default:0
},
isPublished:{
    type:Boolean,
    default:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
}


})

export const Video=mongoose.model("Video", videoSchema);