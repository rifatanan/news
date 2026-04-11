import { model, Schema } from "mongoose";

const NewsSchema = new Schema({

    authorName:{
        type:String,
        required:true,
        trim:true,
    },

    title:{
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
},  
    {
        timestamps: true,
    }
)


const News = model('News', NewsSchema);

export default News;