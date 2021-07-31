
const express = require("express");
var app = express();
const router=express.Router();
const userModel=require('../models/userModel');

router.get('/',async(req,res)=>{
    try{
        const user=await userModel.find().limit(5).sort({created_at:'desc'});
        res.json(user);
    }catch(error){
        res.send(error);
    }
    
});

router.get('/:id',async(req,res)=>{
    try{
        const user=await userModel.find();
        res.json(user);
    }catch(error){
        res.send(error);
    }
    
});

router.post('/create',async(req,res)=>{
    try {
        const data= new userModel(req.body);
        const savedData=await data.save(req.body);
        const user=await userModel.find().limit(5).sort({created_at:'desc'});
        res.json(user);
    } catch (error) {
        console.log(error);
        if(error.code==11000){
            res.json("Duplicate entry for mobile");
        }else{
            console.log('outn');
        res.json(error);
        }
    }
})

router.patch('/updateUser/:id',async (req,res)=>{
   try {
    const filter={"_id":req.params.id};
    const data= await userModel.findByIdAndUpdate(filter,req.body);
    const databyId=await userModel.findById(req.params.id);
    res.json(databyId);
    } catch (error) {
        res.json(error.message);
    }
})

router.delete('/deleteUser/:id',async(req,res)=>{
    try {
        const data= await userModel.findByIdAndDelete(req.params.id, function (err) {
            if(err) console.log(err);
            res.send('Successful deletion');
          });
    } catch (error) {
        res.json(error);
    }
})

module.exports=router;