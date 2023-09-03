import express from 'express'
import { addPost } from '../Controller.js/blog_controller.js';
const Route=express.Router();
Route.post("/news/post",addPost);

export default Route;