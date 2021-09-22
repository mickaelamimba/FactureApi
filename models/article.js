const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    pictures: {type: String, required: false},
    description :{type: String, required:true},
    Amount: {type: Number, required: true},
    unitCost: {type: Number, required:true}

})

const article = mongoose.model("Article",ArticleSchema)

module.exports = article