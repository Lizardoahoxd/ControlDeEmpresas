"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CompanySchema = Schema({
    
    companyname:{
        type:String,
        require:true,
    },
    companytype:String,
    location:String,
    rol:String,
    email:String,
    password:String,
    branchOffice:[{
        nombreCompany:String,
        location:String,
    }]
});


module.exports = mongoose.model('company', CompanySchema);