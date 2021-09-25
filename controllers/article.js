
const articleGet = async (req, res)=>{
    try {
        const Article = req.app.get("models").Article
        const MyArticle = await  Article.find().populate('invoice')
        res.json(MyArticle)
    } catch (error) {
        res.json(error.message)
    }
}
const articleCreate = async (req, res)=>{
    try{

        const Article = req.app.get("models").Article

        const NewArticle = await new Article({
            pictures: req.body.pictures,
            description : req.body.description,
            amount: req.body.amount,
            unitCost: req.body.unitCost,
        }).save()
        console.log(NewArticle)
        res.json(NewArticle)
    }catch (error){
        res.json(error.message)
    }

}
const articleDelete = async(req, res)=>{
    try {
        if (!req.body._id) {
            res.json("_id not fund")   
        }
        const Article = req.app.get("models").Article
        const ToDeleteArticle = await  Article.findById(req.body._id)
        await ToDeleteArticle.remove()
        res.json("successfully deleted")
        
    } catch (error) {
        res.json(error.message)
    }
}
const  articleUpdate = async (req, res)=>{
    try {
        if(!req.body._id || !req.body.toModify ){
            res.json("id not found")
        }
        const Article = req.app.get("models").Article
        const ToModifyArticle =  await Article.findById(req.body._id)
        const ToModifyKeys = Object.keys(req.body.toModify)
        for (const key of ToModifyKeys) {
            ToModifyArticle[key] = req.body.toModify[key]
        }
        await ToModifyArticle.save()
        res.json(ToModifyArticle)
    }catch (error) {
        res.json(error.message)
    }
}

module.exports = {articleGet,articleCreate, articleDelete, articleUpdate}
