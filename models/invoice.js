const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    invoiceYear: {type: Date, required: true},
    conditions :{type: String, required:true},
    invoiceNumber: {type: Number, required: true},
    article : {type: mongoose.Schema.Types.ObjectId, ref: "Article"},
    company : {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
    client: {type: mongoose.Schema.Types.ObjectId, ref: "Client"},
    payment :{type: mongoose.Schema.Types.ObjectId, ref: "Payment"}


})

const invoice = mongoose.model("Invoice",InvoiceSchema)

module.exports = invoice
