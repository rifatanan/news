import { model, Schema } from "mongoose";

const postSchema = new Schema({

    authorName:{
        type:String,
        required:true,
        trim:true,
    },

    short_description: {
        type:String,
        required:true,
        trim:true,
    },

    description: {
        type:String,
        required:true,
        trim:true,
    },

    category: {
        type:String,
        required:true,
        trim:true,
    },

})