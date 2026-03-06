import express from 'express';
import createNewsController from '../controllers/createNews.controller.js';
<<<<<<< HEAD

const router = express.Router();

router.post("/create-news", createNewsController.createNews);
=======
import validateUser from '../middlewars/validation.middleware.js';

const router = express.Router();

router.post("/create-news", validateUser, createNewsController.createNews);
>>>>>>> create-post

export default router;