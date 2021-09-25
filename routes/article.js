const {articleGet, articleCreate, articleDelete, articleUpdate} = require("../controllers/article");
const articleRoute =(app)=>{
 //Create
 app.post("/articleCreate",articleCreate)
 //Read
 app.get('/article', articleGet)
 //Update
 app.post('/articleUpdate', articleUpdate)
 //Delete
 app.post("/articleDelete",articleDelete)
}


module.exports = articleRoute