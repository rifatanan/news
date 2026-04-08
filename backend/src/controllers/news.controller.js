import News from "../models/news.model.js";

const getAllNews = async(request, response) =>{
    try {
        const newsList = await News.find();
        
        response.status(200).json({
            success:true,
            message:"All News fetched successfully.",
            data: newsList
        })

    } catch (error) {
        response.status(500).json({
            success:false,
            message:"Something went wrong.",
            error:error.toString()
        })
    }
}

const getSingleNews = async(request, response) =>{

    const newsId = request.params.id;

    try {
        const singleNews = await News.findOne({ _id: newsId });
        
        if (!singleNews) {
            return response.status(404).json({
                success: false,
                message: "No news found with that ID.",
            });
        }
        
        response.status(200).json({
            success: true,
            message: "Single News fetched Successfully.",
            data: singleNews
        })

    } catch (error) {
        response.status(500).json({
            success: false,
            message: "Something went wrong.",
            error:error.toString()
        })
    }
}

const createNews = async(request, response) =>{
    try {
        const { authorName, short_description, description, category, imageURL } = request.body;

        const createNews = await News.create({
            authorName,
            short_description,
            description,
            category,
            imageURL
        });
        
        response.status(201).json({
            success:true,
            message:"Successfully Created News.",
            data: createNews
        })

    } catch (error) {
        response.status(500).json({
            success:false,
            message:"Something went wrong.",
            error:error.toString()
        })
    }
}

const newsController = {
    getAllNews,
    getSingleNews,
    createNews
}

export default newsController;