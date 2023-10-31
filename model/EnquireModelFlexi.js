const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const flexiEnquire = new Schema({
    first_Name:{
        type:Schema.Types.String
    },
    last_Name:{
        type:Schema.Types.String
    },
    email:{
        type:Schema.Types.String
    },
    phoneNumber:{
        type:Schema.Types.String
    },
    organization:{
        type:Schema.Types.String
    },
    offerings:{
        type:Schema.Types.String
    },
    seats:{
        type:Schema.Types.String
    }

}, { timestamps: true, strict: false })

const flexiEnquireModel = mongoose.model("flexi_Enquire",flexiEnquire)
module.exports=flexiEnquireModel