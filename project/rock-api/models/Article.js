const mongoose = require("mongoose");

const Article = mongoose.model(
    "Article",
    {
        title: { type: String, required: true },
        slug: { type: String, unique: true, index: true, required: true },
        description: String,
        image: String,
        text: String,
        published: { type: Boolean, index: true, default: false },
        publishedAt: { type: Date, index: true, default: Date.now },
        readCount: Number,
    },
    "articles"
);

module.exports = Article;
