const mongoose=require("mongoose")


const customerSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
      
    },
    lastName:{
        type:String,
        required:true
   },
    mobileNumber:{
        type:String,
        required:true,
         min:10
    },
    DOB:{
        type:Date
    },
    emailID:{
        type:String,
        required:true
     
    },
    address:{
        type:String
    },
   
    status:{
        type:String,
        default:"ACTIVE"
    }
},{timestamps:true})
module.exports=mongoose.model("customer",customerSchema)

// Field Type Description
// firstName string
// lastName string
// mobileNumber string 10 digits long
// DOB date
// emailID string abc@xyz.com
// address string
// customerID string UUID
// status string ACTIVE / INACTIVE