import express from 'express'
import upload from '../utils/upload.js';
import { addPost,getPost } from '../Controller.js/blog_controller.js';
import { createImage,getImage } from '../Controller.js/pictureController.js';
const Route=express.Router();
Route.post("/news/post",addPost);
Route.post("/upload/file",upload.single('file'),createImage)
Route.get('/file/:filename',getImage)
Route.get("/get/post",getPost);


export default Route;