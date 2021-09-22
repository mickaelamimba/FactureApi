const articleGet = async (req, res)=>{
    try {
        const Article = req.app.get("models").Article
        const MyArticle = await new Article.find()
        res.json(MyArticle)
    } catch (error) {
        
    }
}
const articleCreate = async (req, res)=>{
    try{
        const Article = req.app.get("models").Article
        const newArticle = await new Article({
            pictures: req.body.pictures,
            description : req.body.description,
            amount: req.body.amount,
            unitCost: req.body.unitCost,
        }).save()
        res.json(newArticle)
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
        const ToDeletArticle = await new Article.findById()
        await ToDeletArticle.remove()
        res.json("susccessfully deleted")
        
    } catch (error) {
        
    }
}

module.exports = {articleGet,articleCreate, articleDelete}
