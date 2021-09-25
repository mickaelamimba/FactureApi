const {paymentGet, paymentUpdate, paymentCreate, paymentDelete} = require("../controllers/payment");
const paymentRoute =(app)=>{

     //Reade
     app.get("/payment", paymentGet)
     //Update
     app.post("/PaymentUpdate",paymentUpdate)
     //Create
     app.post("/PaymentCreate", paymentCreate)
     //Delete
     app.post("/PaymentDelete",paymentDelete)
 

}

module.exports = paymentRoute
