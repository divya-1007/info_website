const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CaseStudy = new Schema({
    full_Name:{
        type:Schema.Types.String
    },
    email:{
        type:Schema.Types.String
    },
    phoneNumber:{
        type:Schema.Types.String
    },

}, { timestamps: true, strict: false })


const  CaseStudyModel = mongoose.model("case-inquiry",CaseStudy)
module.exports=CaseStudyModel
