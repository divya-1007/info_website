const mongoose = require("mongoose");

const getTouchSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true,
    },


}, { timestamps: true, strict: false });

const getTouchModel = mongoose.model("gettouch", getTouchSchema);
module.exports = getTouchModel;