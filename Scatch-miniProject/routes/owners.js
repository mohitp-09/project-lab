const express = require('express');
const router = express.Router();
require('dotenv').config();
const owderModel = require('../models/owner.model');

if(process.env.NODE_ENV === "development"){
    router.post('/create', async (req, res)=>{
        let owners = await owderModel.findOne();
        if(owners){
            return res.status(500).send("You don't have permission to create new owner")
        }
        let {fullname,email,password} = req.body;

        let createdOwner = await owderModel.create({
            fullname,
            email,
            password
        });
        res.status(201).send(createdOwner);
    }
)}

router.get("/", (req, res)=>{
    res.send("owners page");
})

console.log(process.env.NODE_ENV);



module.exports = router;
