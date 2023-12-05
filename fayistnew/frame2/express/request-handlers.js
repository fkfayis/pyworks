import {error} from " console";
import fs from "fs"
export async function setTodo(req,res){
    let {todo}=req.body;
    fs.readFile("./todos.json","utf-8",(error,data)=>{
        if(error){
            console.log(error);
            res.status(500).send("error occured");
            return;
        }
        let todos=data?JSON.parse(data):[];
        todos.push(todo);
        fs.writeFile("./todos.json",JSON.stringify(todos),error)
    })
}