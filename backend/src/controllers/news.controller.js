import CreateNews from "../models/news.model.js";

const getAllNews = async(request, response) =>{
    try {
        const newsList = await CreateNews.find();
        
        response.status(200).json({
            success:true,
            message:"All News fetched successfully.",
            data: newsList,
        })

    } catch (error) {
        response.status(500).json({
            success:false,
            message:"Something went wrong.",
            error:error.toString(),
        })
    }
}

const getSingleNews = async(request, response) =>{

    const newsId = request.params.id;

    try {
        const singleNews = await CreateNews.findOne({_id:newsId});
        
        if (!singleNews) {
            return response.status(404).json({
                success: false,
                message: "No news found with that ID.",
            });
        }
        
        response.status(200).json({
            success: true,
            message: "Single News fetched Successfully.",
            data: singleNews,
        })

    } catch (error) {
        response.status(500).json({
            success: false,
            message: "Something went wrong.",
            error:error.toString(),
        })
    }
}


const newsController = {
    getAllNews,
    getSingleNews
}

export default newsController;