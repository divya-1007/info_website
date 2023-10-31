const express = require("express");
const Gettouch= require("../controller/Gettouch")
const GettouchRouter = express.Router();

GettouchRouter.post("/Add-gettouch",Gettouch.AddGetTouch)
GettouchRouter.get("/gettouch-details", Gettouch.gettouchDetails);

module.exports = GettouchRouter;