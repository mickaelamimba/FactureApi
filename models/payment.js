const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    pictures: {type: String, required: false},
    description :{type: String, required:true},
    Amount: {type: Number, required: true},
    unitCost: {type: Number, required:true}

})

const payment = mongoose.model("Payment",PaymentSchema)

module.exports = payment
