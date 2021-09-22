const {clientGet,clientCreate, clientDelete} =require("../controllers/client")
const clientRoute = (app)=>{
    //Create
    app.post("/clientCreate",clientCreate)
    //Read
    app.get("/client", clientGet)
    //Delete
    app.delete('/clientDelete',clientDelete)
}

module.exports = clientRoute
