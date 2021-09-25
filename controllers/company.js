

const companyGet = async (req, res)=>{
    try{
        const Company = req.app.get("models").Company
        const MyCompany = await Company.find()
        res.json(MyCompany)

    } catch(error){
        res.json(error.message)

    }

}

const companyCreate = async(req,res)=>{
    try{
        const Company = req.app.get("models").Company
        const NewCompany = await new Company({
            firstName : req.body.firstName,
            lastName :req.body.lastName,
            mobile :req.body.mobile,
            fix:req.body.fix,
            addressLineOne:req.body.addressLineOne,
            addressLineTwo :req.body.addressLineTwo,
            zipCode :req.body.zipCode,
            city: req.body.city,
            serialNumber: req.body.serialNumber,
            website: req.body.website
        }).save()
        res.json(NewCompany)

    }catch (error){
        res.json(error.message)
    }

}
const companyDelete = async (req, res)=>{
    try{
        if (!req.body._id) {
            res.json("_id not fund")

        }
        const Company = req.app.get("models").Company
        const ToDeleteCompany = await Company.findById(req.body._id)
        await ToDeleteCompany.remove()
        res.json("susccessfully deleted")

    } catch(error){
        res.json(error.message)

    }

}
const companyUpdate = async (req, res)=>{
    try{
        if (!req.body._id || !req.body.toModify) {
            res.json("_id not fund")
        }
        const Company = req.app.get("models").Company
        const ToModifyCompany = await Company.findById(req.body._id)
        const ToModifyKey = Object.keys(req.body.toModify)
        for (const key of ToModifyKey) {
            ToModifyCompany[key] = req.body.toModify[key]
        }
        await ToModifyCompany.save()
        res.json(ToModifyCompany)

    } catch(error){
        res.json(error.message)

    }

}
module.exports = {
    companyCreate,
    companyGet,
    companyDelete,
    companyUpdate}