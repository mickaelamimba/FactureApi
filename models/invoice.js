const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    invoiceYear: {type: Date, required: true},
    conditions :{type: String, required:true},
    invoiceNumber: {type: Number, required: true},

})

const invoice = mongoose.model("Invoice",InvoiceSchema)

module.exports = invoice