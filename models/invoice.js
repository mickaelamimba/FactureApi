const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    invoiceYear: {type: Date, required: true},
    conditions :{type: String, required:true},
    invoiceNumber: {type: Number, required: true},
    article : {type: mongoose.Schema.Types.ObjectId, ref: "Article"}




})

const invoice = mongoose.model("Invoice",InvoiceSchema)

module.exports = invoice
