const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    pictures: {type: String, required: false},
    description :{type: String, required:true},
    amount: {type: Number, required: true},
    unitCost: {type: Number, required:true},
   invoice : {type: mongoose.Schema.Types.ObjectId, ref: "Invoice"}

})

const Article = mongoose.model("Article",ArticleSchema)

module.exports = Article