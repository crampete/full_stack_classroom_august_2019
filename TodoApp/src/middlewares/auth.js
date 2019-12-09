let jwt = require("jsonwebtoken")
let User = require("../models/User")

function auth(req,res,next){
    try{
        let token = req.headers.authorization.replace("Bearer ","")
        let payload = jwt.verify(token,"secret")
        let userId = payload.userId;

        User.findById(userId).then((user)=>{
            let tokens = user.tokens;
            let tokenIdx = tokens.indexOf(token); 
            if(tokenIdx>-1){

                req.user = user
                req.token = token
                
                next()
            }
            else{
                res.status(401).send("Issue with token")
            }

        })
        .catch(()=>{
            res.status(400).send("User was not found")
        })
    }
    catch(error){
        res.status(401).send("Auth token invalid")
    }
}
module.exports = auth