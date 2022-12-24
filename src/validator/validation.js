const mongoose=require("mongoose")
//==========================// isValidString //==================================

const isValidString = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
  }
  //==============================// isValidName //===============================

const isValidName = function (name) {
    if (/^[a-z A-Z ]+$/.test(name)) {
      return true;
    }
  };

//=========================// isValidEmail //===================================

const isValidEmail = function (value) {
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  if (emailRegex.test(value)) return true;
};
//============================// idCharacterValid //============================

const isIdValid = function (value) {
    return mongoose.Types.ObjectId.isValid(value); 
  };

//==============================// isValidMobile //===============================

const isValidPhone = function (phone) {
    if (/^[0]?[6789]\d{9}$/.test(phone)){
       return true
    }
   }
   module.exports={ isValidString,isValidName,isValidEmail,isIdValid,isValidPhone}