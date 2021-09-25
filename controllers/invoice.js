const invoiceGet = async (req, res)=>{
    try {
        const Invoice = req.app.get("models").Invoice
        const MyInvoice = await Invoice.find()
        res.json(MyInvoice)
    } catch (error) {
        res.json(error.message)
    }
}
const invoiceCreate = async (req, res)=>{
    try {
        const models = req.app.get("models")
        const Invoice = req.app.get("models").Invoice
        const NewInvoice = await new Invoice({
            invoiceYear: req.body.invoiceYear,
            conditions :req.body.conditions,
            invoiceNumber: req.body.invoiceNumber,
        }).save()
        const article= await new models.Article({NewInvoice : _id})
        res.json(NewInvoice)
    } catch (error) {
        res.json(error.message)
    }
}
const invoiceUpdate = async (req, res)=>{
    try {
        if (!req.body._id || !req.body.toModify) {
            res.json("_id not fund")   
        }
        const Invoice = req.app.get("models").Invoice
        const ToModifyInvoice = await  Invoice.findById(req.body._id)
        const toModifyKeys = Object.keys(req.body.toModify)
        for (const key of toModifyKeys) {
            ToModifyInvoice[key] = req.body.toModify[key]  
        }
        await ToModifyInvoice.save()
    
        res.json( ToModifyInvoice) 
    } catch (error) {
        res.json(error.message)
    }
}
const invoiceDelete = async (req, res)=>{
    try {
        if (!req.body._id) {
            res.json("_id not fund")   
        }
        const Invoice = req.app.get("models").Invoice
        const ToDeleteInvoice = await new Invoice.findById(req.body._id)
        await ToDeleteInvoice.remove()
        res.json("susccessfully deleted") 
    } catch (error) {
        res.json(error.message)
    }
}


module.exports = {invoiceGet, invoiceDelete,invoiceUpdate ,invoiceCreate }
