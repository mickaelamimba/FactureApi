const {clientsGet} =require("../controllers/clients")
const clientsRoute = (app)=>{
    app.get("/client", clientsGet)
}

module.exports = clientsRoute