import { Router } from "express";
import { createMenu, getMenu } from "../Controller/menuController";

const route = Router()

route.post('/create-menu', createMenu);
route.get('/create-menu',getMenu)
route.get('/',(req,res)=>{
    res.json("Api working successfull")
})

export default route