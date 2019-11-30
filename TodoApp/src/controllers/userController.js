let express = require('express')
let router = express.Router();
let bcrypt = require('bcrypt')
let User = require("../models/User")


router.post("/signin", (req,res)=>{
    let email = req.body.email;
    let password = req.body.password
    let hash = ""

    bcrypt.compare(password,hash)
    .then((result)=>{
        if(result == true){
            res.send("User signed in sucessfully")
        }
        else{
            res.status(401).send("login incorrect")
        }
    })
})

router.post("/register", (req,res)=>{
    let email = req.body.email
    let name  = req.body.name
    let password = req.body.password

    bcrypt.hash(password,8)
    .then((hash)=>{
        let user = new User({email , name, password : hash})
        user.save().then(()=>{  
            res.send("User Saved successfully")
        })
        .catch(()=>{
            res.status(400).send("User creation failed")
        })
    })
    .catch((err)=>{console.log(err);res.status(400).send("Some error with hashing")})
})

module.exports = router;
