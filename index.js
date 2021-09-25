const express = require("express")
const morgan = require("morgan")
const models = require("./models")
const mongoose = require('mongoose')
const clientRoute = require("./routes/client")
const invoiceRoute = require("./routes/invoice");
const articleRoute = require("./routes/article");
const companyRoute = require("./routes/company");
const paymentRoute = require("./routes/payment");
mongoose.connect("mongodb://localhost:27017/factureApi",{
    useNewUrlParser: true,
    useUnifiedTopology :true,

})
const app = express()
app.use(express.json())
app.set("models",models)
app.use(morgan("dev"))

let port = 8081
//route
paymentRoute(app)
clientRoute(app)
companyRoute(app)
invoiceRoute(app)
articleRoute(app)


app.listen(port, ()=>{
    console.log( `Server successfully launched : http://localhost:${port}`)
})