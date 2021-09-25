const {clientGet,clientCreate, clientDelete, clientUpdate} =require("../controllers/client")
const clientRoute = (app)=>{
    //Create
    app.post("/clientCreate",clientCreate)
    //Read
    app.get("/client", clientGet)
    //Delete
    app.post('/clientDelete',clientDelete)
    //Update
    app.post("/clientUpdate", clientUpdate)
}

module.exports = clientRoute
