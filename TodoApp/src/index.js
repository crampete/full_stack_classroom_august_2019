let express = require('express')
var bodyParser = require('body-parser')
let app = express()

let db = require('./db')
let User = require('./models/User')
let Todo = require('./models/Todo')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/register", (req,res)=>{
    let email = req.body.email
    let name  = req.body.name

    let user = new User({email , name})
    user.save().then(()=>{  
        res.send("User Saved successfully")
    })
    .catch(()=>{
        res.status(400).send("User creation failed")
    })
})

app.post("/todo", (req,res)=>{
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

app.put("/todo", (req,res)=>{
    let {id} = req.body
    Todo.findOneAndUpdate({ "_id" : id}, {done : true})
    .then(()=>{res.send("Todo updated")})
    .catch((error)=> res.status(400).send(error))
})

app.get("/todo", (req,res)=>{
    Todo.find()
    .then((todos)=>{res.send(todos)})
    .catch((error)=> res.status(400).send(error))
})

app.get("/",(req,res) => {
    res.send("Hello World!")
})

app.listen(8000,()=>console.log("App is running"))