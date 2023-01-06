const { Router } = require("express");
const { create } = require("../models/ToDoModel");
const ToDoModel = require('../models/ToDoModel');

const router = Router();

router.get('/', async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
})

router.post('/posts', async (req, res) => {

    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully....");
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        })


    // try {
    //     const post = await ToDoModel.create(req.body);
    //     res.json({
    //         status: 'Success',
    //         result: post
    //     })
    // } catch (err) {
    //     res.status(400).json({
    //         status: 'Failed',
    //         message: err.message
    //     })
    // }

})

router.put('/update', async (req, res) => {

    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => {
            res.send("Updated Successfully....")
        })
        .catch((err) => {
            console.log(err);
        })
})

router.post('/delete', async(req,res)=>{

    const {_id}=req.body;

    ToDoModel
    .findByIdAndDelete({_id})
    .then(()=>{
        res.send("Deleted Successfully....")
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;