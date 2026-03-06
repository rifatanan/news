import express from 'express';
import createNewsController from '../controllers/createNews.controller.js';
import validateUser from '../middlewars/validation.middleware.js';

const router = express.Router();

router.post("/create-news", validateUser, createNewsController.createNews);

export default router;