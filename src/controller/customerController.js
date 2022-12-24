const mongoose=require("mongoose")
const customerModel=require("../model/customerModel")
const {isValidString,isValidName,isValidEmail,isIdValid,isValidPhone}=require("../validator/validation")



const createCustomer=async function(req,res){
    try{
     let data=req.body
     const{firstName,lastName,mobileNumber,emailID}=data
     //======================checkmandatory========================
     if(!firstName){return res.status(400).send({status:false,message:"firstName is mandatory"})}
     if(!lastName){return res.status(400).send({status:false,message:"lastName is mandatory"})}
     if(!mobileNumber){return res.status(400).send({status:false,message:"mobileNumber is mandatory"})}
     if(!emailID){return res.status(400).send({status:false,message:"emailID is mandatory"})}

     //=============================checkvalidation===============================================
     if(!isValidString(firstName)){return res.status(400).send({status:false,message:"firstName must be string"})}
     if(!isValidString(lastName)){return res.status(400).send({status:false,message:"lastName must be string"})}
     if(!isValidString(emailID)){return res.status(400).send({status:false,message:"emailID must be string"})}
     if(!isValidString(mobileNumber)){return res.status(400).send({status:false,message:"phoneNumber must be string"})}
     if(!isValidName(firstName)){return res.status(400).send({status:false,message:"firstName is invalid"})}
     if(!isValidName(lastName)){return res.status(400).send({status:false,message:"lastName is invalid"})}
     if(!isValidEmail(emailID)){{return res.status(400).send({status:false,message:"invalid emailID"})}}
     if(!isValidPhone(mobileNumber)){return res.status(400).send({status:false,message:"invalid mobileNumber"})}
    let checkemail=await customerModel.findOne({emailID:emailID})
    if(checkemail){return res.status(400).send({status:false,message:"emailID already present"})}
    let checkmobileno=await customerModel.findOne({mobileNumber:mobileNumber})
    if(checkmobileno){return res.status(400).send({status:false,message:"mobileNumber already present"})}
    
     let createCust=await customerModel.create(data)
     res.status(201).send({status:true,data:createCust})
    }
    catch(err){
       res.status(500).send({status:false,message:err.message})
    }
}
const getAllCustomer=async function(req,res){
    try{
       let allCustomers=await customerModel.find({status:"ACTIVE"})
       res.status(200).send({status:true,data:allCustomers})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}
const deleteCustomer=async function(req,res){
    try{
        let customerId=req.params.customerId
        if(!isIdValid(customerId)){return res.status(400).send({status:false,message:"invalid customerId"})}
        let checkpresence=await customerModel.findOne({_id:customerId,status:"ACTIVE"})
        if(!checkpresence){return res.status(404).send({status:false,message:"customer not fount with this Id"})}
        let deletecust=await customerModel.findOneAndUpdate({_id:customerId},{$set:{status:"INACTIVE"}})
        res.status(204).send({message:"Done"})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}


module.exports={createCustomer,getAllCustomer,deleteCustomer}