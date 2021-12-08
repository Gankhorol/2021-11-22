const mongoose = require("mongoose");

const Category = mongoose.model(
    "Category",
    {
        name: { type: String, required: true },
    },
    "categories"
);

module.exports = Category;
