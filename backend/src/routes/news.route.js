import express from 'express';
import newsController from '../controllers/news.controller.js';

const router = express.Router();

router.get("/all-news", newsController.getAllNews);
router.get("/single-news/:id", newsController.getSingleNews);

export default router;