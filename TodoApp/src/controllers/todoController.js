let express = require('express')
let router = express.Router();
let Todo = require("../models/Todo")

router.post("/",(req,res)=>{
    let {title , description , creator} = req.body
    let done = false
    let createDateTime = new Date()

    let todo = new Todo({
        title ,description, creator, done, createDateTime
    })
    todo.save().then(()=>{
        res.send("Todo Added successfully")
    })
    .catch((error)=>{
        res.status(400).send(error)
    })
})

router.put("/", (req,res)=>{
    let {id} = req.body
    Todo.findOneAndUpdate({ "_id" : id}, {done : true})
    .then(()=>{res.send("Todo updated")})
    .catch((error)=> res.status(400).send(error))
})

router.get("/", (req,res)=>{
    Todo.find()
    .then((todos)=>{res.send(todos)})
    .catch((error)=> res.status(400).send(error))
})

module.exports = router;
