const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const URLSlug = require("mongoose-slug-generator");
mongoose.plugin(URLSlug);

const ArticalModelSchema = new Schema({
    title: {
        type: Schema.Types.String,
    },
    image: {
        type: Schema.Types.String,
    },
    pdf: {
        type: Schema.Types.String,
    },
    description: {
        type: Schema.Types.String,
    },
    short_description: {
        type: Schema.Types.String,
    },
    slug: {
        type: String,
        slug: "title",
        // lowercase: true,
        // default: " ",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// ArticalModelSchema.pre("save", function(next) {
//   this.slug = this.title.split(" ").join("-");
//   next();
// });

// ArticalModelSchema.pre("save", function (next) {
//   this.slug = slugify(this.title);
//   next();
// })

const ArticalModel = mongoose.model("artical", ArticalModelSchema);
module.exports = ArticalModel;
