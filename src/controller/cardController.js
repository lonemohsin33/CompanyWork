const mongoose=require("mongoose")
const customerModel=require("../model/customerModel")
const cardModel=require("../model/cardModel")
const{isIdValid,isValidString,isValidName}=require("../validator/validation")


const createCard=async function(req,res){
    try{
    let data=req.body
    const{customerName,customerID}=data
    //===========================checkmandatory============================
    if(!customerName){return res.status(400).send({status:false,message:"customerName is mandatory"})}
    if(!customerID){return res.status(400).send({status:false,message:"customerID is mandatory"})}
    //=======================checkvalidation============================================
    if(!isValidString(customerName)){return res.status(400).send({status:false,message:"customerName should be in string"})}
    if(!isValidString(customerID)){return res.status(400).send({status:false,message:"customerID should be in string"})}
    if(!isValidName(customerName)){return res.status(400).send({status:false,message:"customerName is mandatory"})}
    if(!isIdValid(customerID)){return res.status(400).send({status:false,message:"customerID is invalid"})}
    let checkcard=await cardModel.find() 
    let n=checkcard.length
    data.cardNumber=`C0${n+1}`
    let newCard=await cardModel.create(data)
    res.status(201).send({status:true,data:newCard})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}
let  getallcardlist=async function(req,res){
    try{
        let getcard=await cardModel.find()
        res.status(200).send({status:true,data:getcard})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}


module.exports={createCard, getallcardlist}