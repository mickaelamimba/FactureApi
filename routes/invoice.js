const {invoiceGet, invoiceCreate, invoiceUpdate, invoiceDelete} = require("../controllers/invoice");
const invoiceRoute =(app)=>{
    //Reade
    app.get('/invoice', invoiceGet)
    //Update
    app.post("/invoiceUpdate",invoiceUpdate)
    //Create
    app.post("/invoiceCreate", invoiceCreate)
    //Delete
    app.delete("/invoiceDelete",invoiceDelete)

}

module.exports = invoiceRoute
