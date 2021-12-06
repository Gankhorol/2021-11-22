var express = require("express");
var router = express.Router();

const sampleList = [
    { id: 1, name: "Politics" },
    { id: 2, name: "Economy" },
    { id: 3, name: "Sport" },
];

router.get(
    "/",
    (req, res, next) => {
        console.log("categories middleware");
        next();
    },
    (req, res) => {
        const { q, size } = req.query;
        console.log(q, size);
        res.json(sampleList);
    }
);

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const one = sampleList.find((item) => item.id === +id);

    if (one) {
        res.json(one);
    } else {
        res.json({ error: 404 });
    }
});

router.post("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
