const {invoiceGet} = require("../controllers/invoice");
const invoiceRoute =(app)=>{
    app.get('/invoice', invoiceGet)

}

module.exports = invoiceRoute