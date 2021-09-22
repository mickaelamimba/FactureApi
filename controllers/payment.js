const paymentGet = async (req, res)=>{
    try {
        const Payment = req.app.get("models").Payment
        const MyPayment = await Payment.find()
        res.json(MyPayment)
        
    } catch (error) {
        res.json(error.message)
    }
    
}
const paymentCreate  = async (req, res)=>{
    try {
        const Payment = req.app.get("models").Payment
        const NewPayment = await new Payment({
            pictures: req.body.pictures,
            description :req.body.description,
            amount: req.body.amount,
            unitCost:req.body.unitCost

        }).save()
        res.json(NewPayment)
    } catch (error) {
        res.json(error.message)
    }
    
}

const paymentUpdate  = async (req, res)=>{
    try {
        if (!req.body._id || !req.body.toMdify) {
            res.json("_id not fund ")
        }
        const Payment = req.app.get("models").Payment
        const ToModifyPayment = await Payment.findById(req.boiy._id)
        const toModifyKeys = Object.keys(req.body._id)
        for (const key of toModifyKeys) {
            toModifyKeys[key] = req.body.toMdify[key]
        }
        await ToModifyPayment.save()
        res.json(ToModifyPayment)
    } catch (error) {
        res.json(error.message)
    }
    
}
const paymentDelete = async (req, res)=>{
    try {
        if (!req.body._id) {
            res.json("_id not fund ")
        }

        const Payment = req.app.get("models").Payment
        ToDeletePayment = await Payment.findById(req.body._id)
        await ToDeletePayment.remove()
        res.json("susccessfully deleted") 
    } catch (error) {
        res.json(error.message)
    }
    
}

module.exports = {paymentGet,paymentCreate,paymentUpdate,paymentDelete}
