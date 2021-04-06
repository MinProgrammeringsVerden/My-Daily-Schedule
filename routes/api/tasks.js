const express = require('express');
const router = express.Router();
const Task = require('../../models/item')

router.get('/' , (req , res , next ) => {
    Task.find().sort({data: -1})
    .then(tasks =>(res.json(tasks)))
    .catch((err) =>console.log(error.response.data))
    //.catch((err) => res.json(404 , ' getting taskes failed'))
});

router.post('/' , (req , res , next ) => {
    const name = req.body.name;
    const newTask = new Task ({name})
    newTask.save().then(tasks => res.json(tasks) )
    .catch((err) => console.log(error.response.data))
    //.catch((err) => res.json(404 , err))
    
    
    });


router.delete('/:taskId' , (req , res , next ) => {
    Task.findByIdAndRemove(req.params.taskId)
    .then(task => res.json(task))
    .catch((err) =>console.log(error.response.data))
   // .catch((err) => res.json(404 , 'delete the task failed'))
 });

module.exports = router ;
