const {articleGet, articleCreate} = require("../controllers/article");
const articleRoute =(app)=>{
 //Create
 app.post("/articleCreate",articleCreate)
 //Read
 app.get('/article', articleGet)
}

module.exports = articleRoute