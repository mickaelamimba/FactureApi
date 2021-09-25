const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    typeOfPayment: {type: String, required: false},
    Reference :{type: String, required:true},
    totalSum: {type: Number, required: true},
    paymentDate: {type: Date, required:true},


})

const payment = mongoose.model("Payment",PaymentSchema)

module.exports = payment
