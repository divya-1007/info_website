const express = require("express");
const Contact = require('../controller/aiDevelopmentController')
const AIDevelopmarntRouter = express.Router();

AIDevelopmarntRouter.post("/schedule-consultation",Contact.aiDevelopmentService)


module.exports = AIDevelopmarntRouter;
