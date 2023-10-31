const express = require("express");
const SubmitArticleRouter = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { submitData, getSubmitData, updateSubmitArtical, submitGetData } = require("../controller/submitArticalController");

SubmitArticleRouter.post("/create-submit",upload.single("file"),submitData);
SubmitArticleRouter.get("/getsubmit/:id", getSubmitData);
SubmitArticleRouter.put("/submitUpdate/:id", updateSubmitArtical);
SubmitArticleRouter.get("/submitData/:id", submitGetData); 


module.exports = SubmitArticleRouter;  