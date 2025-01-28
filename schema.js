const mongoose = required("mongoose");

const profileSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number
})

const activitySchema = new mongoose.Schema({
    lastLogin : {type : Date}
})

const userSchema = new mongoose.Schema({
    username : {type : String, required, unique : true},
    email : {type : String, required, unique : true},
    password :{type : String , required},
    roles : {type : [String]},
    profile : profileSchema,
    activity : activitySchema

})

