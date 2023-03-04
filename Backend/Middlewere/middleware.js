const jwt= require("jsonwebtoken")

const middleware= (req,res,next)=>{

    const token= req.headers.authorization;
    console.log("token:",token)
    if(token){
        jwt.verify(token,"rajesh",(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.userID;
                next();
            }else{
                res.send({"Msg":"Please Login"})
            }
        })
    }else{
        res.send({"Msg":"Please Login"})
    }
}

module.exports= {middleware};