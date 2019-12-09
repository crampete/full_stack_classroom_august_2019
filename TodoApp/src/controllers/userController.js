let express = require('express')
let router = express.Router();
let bcrypt = require('bcrypt')
let User = require("../models/User")
let jwt = require("jsonwebtoken")
let auth = require("../middlewares/auth")

router.post("/signin",(req,res)=>{
    let email = req.body.email;
    let password = req.body.password
    User.findOne({"email" : email})
    .then((user)=>{
        let hash = user.password;
        bcrypt.compare(password,hash)
        .then((result)=>{
            if(result==true){
                let payload = {userId : user._id}
                let token = jwt.sign(payload,"secret",{expiresIn : "18h"})

                user.tokens = user.tokens.concat([token])
                user.save().then(()=>{
                    res.send({token : token})
                })
                .catch(err=>{
                    res.status(400).send("Token not saved to DB")
                })

                
            }
            else
                res.status(401).send("Login failed")
            })
    })
    .catch((error)=>{res.status(401).send("Cannot find user in db")})
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


router.post("/logout",auth,(req,res)=>{
    let user = req.user
    let token = req.token

    let newTokens = []

    for(let t of user.tokens){
        if(t!=token){
            newTokens.push(t)
        }
    }
    user.tokens = newTokens

    // user.tokens =  user.tokens.filter((t)=>t!=token)

    user.save().then(()=>{
        res.send("User Logged out")
    }).catch(()=> res.send("Some error"))
})

module.exports = router;
