const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId

const cardSchema=new mongoose.Schema({
    cardNumber:{
        type:String,
        required:true
    },
    cardType:{
        type:String,
        default:"REGULAR"
    },
    customerName:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"ACTIVE"
    },
    vision:{
        type:String
    },
    customerID:{
        type:ObjectId,
        required:true,
        ref:"customer"
    }


},{timestamps:true})
module.exports=mongoose.model("card",cardSchema)


// Field Type Description
// cardNumber string Auto_increment e.g: C001
// cardType String [REGULAR/SPECIAL]
// customerName string
// status string [ACTIVE/INACTIVE] Default: ACTIVE
// vision string
// customerID string Reference from customer
// table






