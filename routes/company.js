const {companyGet, companyCreate, companyDelete, companyUpdate} = require("../controllers/company");

const companyRoute = (app)=>{
    //Create
    app.post("/companyCreate",companyCreate)
    //Read
    app.get("/company", companyGet)
    //Delete
    app.post('/companyDelete',companyDelete)
    //Update
    app.post("/companyUpdate", companyUpdate)
}

module.exports = companyRoute