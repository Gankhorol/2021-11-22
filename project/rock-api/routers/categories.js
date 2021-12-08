var express = require("express");
var router = express.Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
    const list = await Category.find();
    res.json(list);
});

module.exports = router;
