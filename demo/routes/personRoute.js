const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.post('/', async(req, res)=>{
    
    try{
        const data = req.body;
        const personData = new Person(data);
        const savedData = await personData.save()
        console.log('Data Saved');        
        res.status(200).json(savedData)
    }
    catch(e){
        console.log(e);
        res.status(500).json({error:"Internal Server Error"})
    }

})

router.get('/',async(req,res)=>{
    try{
        const data = await Person.find();
        res.status(200).send(data);
    }
    catch(e){
        console.log(e);
        res.status(500).send({error: "Error while fetching data from the server"})
    }
})

router.get('/:workType', async(req, res)=>{
    try {
        const workType = req.params.workType;
        const data = await Person.find({work:workType});
        const response = res.status(200).json(data);
        console.log(response)
    } catch (error) {
        res.status(500).json({error:"internal server error"});
        console.log('Work not fetched')
    }

})


router.put('/:id', async(req,res)=>{
    try {
        const _id = req.params.id;
        const personData = req.body;

        const updatedData = await Person.findByIdAndUpdate(_id, personData)

        if(!updatedData){
            res.status(404).json({status:'Record not found'})
        }

        res.status(200).json(updatedData)
    } catch (error) {
        res.status(500).json({error:"internal server error"});
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const nameDelete = req.params.id;

        const response  = await Person.findByIdAndDelete(nameDelete);

        if(!response){
            res.status(404).json({status:'Record not found'})
        }

        const updatedResponse = await Person.find();

        res.status(200).json(updatedResponse)
    } catch (error) {
        res.status(500).json({error:"internal server error"});
    }
})

module.exports = router;