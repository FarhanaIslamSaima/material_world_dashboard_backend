// Testing only 
import { fileURLToPath } from 'url'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import Route from './Router/route.js'
import express from "express"
import Cors from "cors"
import bodyParser from "body-parser"
import { connection } from './database/db.js'


const app=express();
app.use(Cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/",Route);
const port=8000;

//serving an html file (usually for testing purposes)
app.get('/test', function(req, res) {
    res.sendFile('views/index.html', {root: __dirname })
});
app.listen(port,()=>{
    console.log("Server connected succefully at http://localhost:8000/test");
})
connection();