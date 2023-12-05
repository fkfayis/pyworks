import express from "express";
import router  from "./router.js";
import fs from "fs"
import { error } from "console";


const app=express();
app.use(customMW);
app.use(express.json());
app.use(express.static("./static"))
app.use("/api",router);
app.listen( 3000 ,error=>{
    if (error){
        return console.log(error);
    }
    console.log(`server started on port 3000`);
})