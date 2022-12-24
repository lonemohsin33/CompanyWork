const express=require("express")
const router=express.Router()
const{createCustomer,getAllCustomer,deleteCustomer}=require("../controller/customerController")
const{createCard, getallcardlist}=require("../controller/cardController")

//===================customerapi====================
router.post("/customer",createCustomer)
router.get("/customer",getAllCustomer)
router.delete("/customer/:customerId",deleteCustomer)
//===================cardapi=======================
router.post("/card",createCard)
router.get("/card",getallcardlist)


module.exports=router