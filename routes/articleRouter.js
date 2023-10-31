// const express = require("express");
// const { articleCreate, getArticalData, getArticalList, updateArtical, articalData, articalDelete } = require("../controller/articalController");
// const upload = require("../middleware/multerMiddleware");
// const ArticleRouter = express.Router();
// // const uploadImage = require("../common/Upload")

// ArticleRouter.post("/create-artical", upload, articleCreate);
// ArticleRouter.get("/getartical/:slug", getArticalData);
// ArticleRouter.get("/articalList", getArticalList);          
// ArticleRouter.put("/update/:id", upload, updateArtical)
// ArticleRouter.get("/articalGet/:id", articalData);
// ArticleRouter.delete("/articaldel/:id", articalDelete);


// module.exports = ArticleRouter;
const express = require("express");
const { articleCreate, getArticalData, getArticalList, updateArtical, articalData, articalDelete } = require("../controller/articalController");
const upload = require("../middleware/multerMiddleware");
const ArticleRouter = express.Router();
// const uploadImage = require("../common/Upload")

ArticleRouter.post("/create-article", upload, articleCreate);
ArticleRouter.get("/getarticle/:slug", getArticalData);
ArticleRouter.get("/articleList", getArticalList);
ArticleRouter.put("/update/:id", upload, updateArtical)
ArticleRouter.get("/articleGet/:id", articalData);
ArticleRouter.delete("/articledel/:id", articalDelete);


module.exports = ArticleRouter;