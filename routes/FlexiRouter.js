const express = require("express");
const { flexiContactUs,flexiEnquire } = require("../controller/FlexiController");

const FlexiRouter = express.Router();

FlexiRouter.post("/contactUs", flexiContactUs)
FlexiRouter.post("/enquire-form",flexiEnquire)



module.exports = FlexiRouter;