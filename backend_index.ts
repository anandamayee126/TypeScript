import {Router} from 'express';
const routes= Router();

import db from './db_user';

routes.post('/add',async(req:any,res:any)=>{
    const name= req.body.name;
    const new_user= await db.create({name:name});
    return res.json({success:true,message:new_user});
})

export default routes;