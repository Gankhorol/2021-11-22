const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rockAdmin:NuzXLnuPtrY67rS8@cluster0.tprtt.mongodb.net/testDB?retryWrites=true&w=majority");

app.use(cors());

const Cat = mongoose.model("Cat", { name: String });

app.get("/", (req, res) => {
    const kitty = new Cat({ name: "Zildjian" });
    kitty.save().then(() => console.log("meow"));

    res.send("Hello World!");
});

const Article = mongoose.model("Article", {
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true }, // filter
    description: String,
    text: String,
    publishedAt: { type: Date, index: true }, // sort
    readCount: Number,
});

app.get("/create", async (req, res) => {
    const newArticle = new Article({
        title: "Roadmap for React JS 2022",
        description: "In the previous blog I talked about why one should prefer react for Frontend.",
        slug: "roadmap-for-react-js-2022-4ccn" + Date.now(),
    });

    // newArticle.save().then((newDoc) => res.json(newDoc));

    // const newDoc = await newArticle.save();

    // res.json(newDoc);

    Article.create({
        title: "Roadmap for React JS 2022",
        description: "In the previous blog I talked about why one should prefer react for Frontend.",
        slug: "roadmap-for-react-js-2022-4ccn" + Date.now(),
    }).then((newDoc) => {
        res.json(newDoc);
    });
});

app.get("/list", (req, res) => {
    Article.find().then((list) => res.json(list));
});

app.get("/one", (req, res) => {
    Article.findOne({ _id: "61b02f129a1cb770d6a0e8a9" }).then((list) => res.json(list));
});

app.get("/update", (req, res) => {
    Article.updateOne({ _id: "61b02f129a1cb770d6a0e8a9" }, { slug: "update-slug" }).then((data) => {
        res.json(data);
    });
});

app.get("/delete", (req, res) => {
    Article.deleteOne({ _id: "61b02f129a1cb770d6a0e8a9" }).then((data) => {
        res.json(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
