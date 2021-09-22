const articleGet = async (req, res)=>{
    res.json('my article')
}
const articleCreate = async (req, res)=>{
    try{
        const Article = req.app.get("models").Article
        const newArticle = await new Article({
            pictures: "picture",
            description :"flayer ",
            Amount: '12',
            unitCost: '4',
        }).save()
        res.json(newArticle)
    }catch (error){
        res.json(error.message)
    }

}

module.exports = {articleGet,articleCreate}