import CreateNews from "../models/createNews.model.js";

const createNews = async(request, response) =>{
    try {
        const { authorName, short_description, description,category } = request.body;
        const createNews = await CreateNews.create({authorName, short_description, description, category});
        
        response.status(201).json({
            success:true,
            message:"Successfully Created News.",
            createNews,
        })

    } catch (error) {
        response.status(500).json({
            success:false,
            message:"Something went wrong.",
            error:error.toString(),
        })
    }
}

const createNewsController = {
    createNews
}

export default createNewsController;