import express from 'express'
import { textCheck } from '../controller/blogController.js';
const Route=express.Router();
Route.get("/check",textCheck);

export default Route;