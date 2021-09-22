const {companyGet} = require("../controllers/company");

const companyRoute = (app)=>{
    app.get("/company", companyGet)
}

module.exports = companyRoute