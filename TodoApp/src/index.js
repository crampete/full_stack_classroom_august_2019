let express = require('express')
var bodyParser = require('body-parser')
let app = express()
let db = require('./db')
let todoController = require("./controllers/todoController")
let userController = require("./controllers/userController")

let cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/user",userController)
app.use("/todo",todoController)

app.listen(8000,()=>console.log("App is running"))
