import { model, Schema } from "mongoose";

const createNewsSchema = new Schema({

    authorName:{
        type:String,
        required:true,
        trim:true,
    },

    short_description:{
        type:String,
        required:true,
        trim:true,
    },

    description:{
        type:String,
        required:true,
        trim:true,
    },

    category:{
        type:String,
        required:true,
        trim:true,
    },

    imageURL:{
        type:String,
        required:true,
        trim:true,
    }
})


const CreateNews = model('CreateNews', createNewsSchema);

export default CreateNews;