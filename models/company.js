const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    firstName :{type: String, require :true},
    lastName :{type:String,require :true},
    mobile :{type: Number, required:true},
    fix: {type: Number, required: false},
    addressLineOne: {type: String, required:true},
    addressLineTwo :{type: String, required: false},
    zipCode :{type: Number, required:true},
    city: {type:String, required:true},
    serialNumber: {type: Number, required:false},
    website: {type: String, required:false},



})

const company = mongoose.model("Company",CompanySchema)

module.exports = company