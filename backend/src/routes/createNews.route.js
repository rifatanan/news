import express from 'express';
import createNewsController from '../controllers/createNews.controller.js';

const router = express.Router();

router.post("/create-news", createNewsController.createNews);

export default router;