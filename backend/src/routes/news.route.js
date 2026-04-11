import express from 'express';
import newsController from '../controllers/news.controller.js';
import validateUser from '../middlewars/validation.middleware.js';

const router = express.Router();

router.post("/create-news", validateUser, newsController.createNews);
router.get("/all-news", newsController.getAllNews);
router.get("/single-news/:id", newsController.getSingleNews);
router.get("/category-news/:category", newsController.getCategoryNews);

export default router;