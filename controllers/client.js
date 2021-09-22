const clientGet = async (req, res)=>{
    try{
        const Client = req.app.get("models").Cleint 
        const MyClient = await new Cleint.find()
        res.json(MyClient)

    } catch(error){
        res.json(error.message)

    }
    
}

const clientCreate = async(req,res)=>{
    try{
        const Client = req.app.get("models").Cleint 
        const newClient = await new Client({
            firstName : req.body.firstName,
            lastName :req.body.lastName,
            mobile :req.body.mobile,
            fix:req.body.fix,
            addressLineOne:req.body.addressLineOne,
            addressLineTwo :req.body.addressLineTwo,
            zipCode :req.body.zipCode,
            city: req.body.city
        }).save()

    }catch (error){
        res.json(error.message)
    }

}
const clientDelete = async (req, res)=>{
    try{
        if (!req.body._id) {
            res.json("_id not fund")
            
        }
        const Client = req.app.get("models").Cleint 
        const ToDeletClient = await new Cleint.findById(req.body._id)
        await ToDeletClient.remove()
        res.json("susccessfully deleted")

    } catch(error){
        res.json(error.message)

    }
    
}


module.exports = {clientGet,clientCreate,clientDelete }
