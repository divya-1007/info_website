const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const URLSlug = require("mongoose-slug-generator");
mongoose.plugin(URLSlug);

const SubmitModelSchema = new Schema({
    name: {
        type: Schema.Types.String,
    },
    email: {
        type: Schema.Types.String,
    },
    number: {
        type: Schema.Types.Number,
    },
    purpose: {
        type: Schema.Types.String,
    },
    file: {
        type: Schema.Types.String
    },
    requirements:{
        type:Schema.Types.String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, { strict: false });

// SubmitModelSchema.pre("save", function(next) {
//   this.slug = this.title.split(" ").join("-");
//   next();
// });

// SubmitModelSchema.pre("save", function (next) {
//   this.slug = slugify(this.title);
//   next();
// })

const SubmitModel = mongoose.model("submit", SubmitModelSchema);
module.exports = SubmitModel;
