const {paymentGet} = require("../controllers/payment");
const paymentRoute =(app)=>{
    app.get("/payment", paymentGet)

}

module.exports = paymentRoute