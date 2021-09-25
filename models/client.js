const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    firstName :{type: String, require :true},
    lastName :{type:String,require :true},
    mobile :{type: Number, required:true},
    fix: {type: Number, required: false},
    addressLineOne: {type: String, required:true},
    addressLineTwo :{type: String, required: false},
    zipCode :{type: Number, required:true},
    city: {type:String, required:true},


})

const Client = mongoose.model("Client",ClientSchema)

module.exports = Client