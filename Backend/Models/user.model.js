

const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    games:[{
        invitationcode:String,
        maxscore:Number,
        ifwin:Boolean
    }]
},{
    versionKey:false,
})


const UserModel= mongoose.model("user",userSchema);

module.exports={UserModel};