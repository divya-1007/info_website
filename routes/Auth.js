const express = require("express");
const { registerUser,updateAdminEmail } = require("../controller/Auth");

const AuthRouter = express.Router();

AuthRouter.post("/register", registerUser)
AuthRouter.put("/update-email/:id",updateAdminEmail)



module.exports = AuthRouter;