const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const flexiContact = new Schema({
    full_Name:{
        type:Schema.Types.String
    },

    email:{
        type:Schema.Types.String
    },
    message:{
        type:Schema.Types.String
    }

}, { timestamps: true, strict: false })

const flexiContactModel = mongoose.model("flexi_Contact",flexiContact)
module.exports=flexiContactModel