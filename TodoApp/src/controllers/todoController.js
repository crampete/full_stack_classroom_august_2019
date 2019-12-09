let express = require('express')
let router = express.Router();
let Todo = require("../models/Todo")
let auth = require("../middlewares/auth")

router.post("/",auth,(req,res)=>{
    let {title , description} = req.body
    let done = false
    let createDateTime = new Date()
    let creator = req.user._id;

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

router.get("/", auth,(req,res)=>{
    let userId = req.user._id

    Todo.find({ creator : userId})
    .then((todos)=>{res.send(todos)})
    .catch((error)=> res.status(400).send(error))
})

module.exports = router;
