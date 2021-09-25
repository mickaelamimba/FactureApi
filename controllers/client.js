const clientGet = async (req, res)=>{
    try{
        const Client = req.app.get("models").Client
        const MyClient = await Client.find()
        res.json(MyClient)

    } catch(error){
        res.json(error.message)

    }
    
}

const clientCreate = async(req,res)=>{
    try{
        const Client = req.app.get("models").Client
        const NewClient = await new Client({
            firstName : req.body.firstName,
            lastName :req.body.lastName,
            mobile :req.body.mobile,
            fix:req.body.fix,
            addressLineOne:req.body.addressLineOne,
            addressLineTwo :req.body.addressLineTwo,
            zipCode :req.body.zipCode,
            city: req.body.city
        }).save()
        res.json(NewClient)

    }catch (error){
        res.json(error.message)
    }

}
const clientDelete = async (req, res)=>{
    try{
        if (!req.body._id) {
            res.json("_id not fund")
            
        }
        const Client = req.app.get("models").Client
        const ToDeleteClient = await Client.findById(req.body._id)
        await ToDeleteClient.remove()
        res.json("susccessfully deleted")

    } catch(error){
        res.json(error.message)

    }
    
}
const clientUpdate = async (req, res)=>{
    try{
        if (!req.body._id || !req.body.toModify) {
            res.json("_id not fund")
        }
        const Client = req.app.get("models").Client
        const ToModifyClient = await Client.findById(req.body._id)
        const ToModifyKey = Object.keys(req.body.toModify)
        for (const key of ToModifyKey) {
            ToModifyClient[key] = req.body.toModify[key]
        }
        await ToModifyClient.save()
        res.json(ToModifyClient)

    } catch(error){
        res.json(error.message)

    }

}


module.exports = {clientGet,clientCreate,clientDelete,clientUpdate }
