import News from "../models/news.model.js";

const createNews = async(request, response) =>{
    try {
        const { authorName, title, description, category, imageURL } = request.body;

        const createNews = await News.create({
            authorName,
            title,
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

const getCategoryNews = async(request, response) =>{

    const category = request.params.category;

    try {
        const singleNews = await News.find({category });
        
        if (!singleNews) {
            return response.status(404).json({
                success: false,
                message: "No news found with that ID.",
            });
        }
        
        response.status(200).json({
            success: true,
            message: `${category} Category News fetched Successfully.`,
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

const newsController = {
    getAllNews,
    getSingleNews,
    createNews,
    getCategoryNews
}

export default newsController;