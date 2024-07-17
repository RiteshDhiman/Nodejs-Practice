const express = require('express');
const router = express.Router();
const Menu = require('../models/menu')

router.post('/', async(req,res)=>{
    try {
        const data = req.body;
        const menuData = new Menu(data);

        const response = await menuData.save();

        res.status(200).json(response);
        console.log("Menu data saved");
    } catch (error) {
        res.status(500).json({error:'Internal error'})
    }
})

router.get('/', async(req,res)=>{
    try {
        const menuData = await Menu.find();
        res.status(200).json(menuData);
        console.log("Menu data fetched");
            
    } catch (error) {
        res.status(500).json({error:'Internal error'})
    }
})

router.get('/:tasteType', async(req,res)=>{
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet'){
            const tasteData = await Menu.find({taste : tasteType});
            res.send(200).json(tasteData);
        }
        else{
            res.send(200).json({warning: 'Taste is invalid'})
        }
    } catch (error) {
        res.send(500).json({error:'Internal Server Error'})
    }
})

module.exports = router;