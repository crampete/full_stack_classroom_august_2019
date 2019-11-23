let express = require('express')
var bodyParser = require('body-parser')
let app = express()

let db = require('./db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/register", (req,res)=>{
    let email = req.body.email
    let name  = req.body.name

    let user = new db.User({email , name})
    user.save().then(()=>{
        res.send("User Saved successfully")
    })
    .catch(()=>{
        res.status(400).send("User creation failed")
    })
})

app.get("/",(req,res) => {
    res.send("Hello World!")
})

app.listen(8000,()=>console.log("App is running"))