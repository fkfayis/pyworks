import { Router } from "express";
import * as rh from"./request-handlers.js";
const router =Router();
router.route("/set-todo").post(rh.setTodo);
router.route("/get-todo").get(customMW,rh.getTodo);
router.route("/del-todo").delete(rh.setTodo);
router.route("/edit-todo").put(rh.editTodo);
router.route("/num-todo").get(customMW,rh.numTodo);
 

export default router;
function customMV(req,res,next){
    console.log("this is middleware",req.url);
    next();
}

