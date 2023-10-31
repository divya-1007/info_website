const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const aiDevelopment = new Schema({
    full_Name:{
        type:Schema.Types.String
    },

    email:{
        type:Schema.Types.String
    },
    phoneNumber:{
        type:Schema.Types.String
    },
    message:{
        type:Schema.Types.String
    },

}, { timestamps: true, strict: false })


const  aiDevelopmentModel = mongoose.model("ai_development_services",aiDevelopment)
module.exports=aiDevelopmentModel
