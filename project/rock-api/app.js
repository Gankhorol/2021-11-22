const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rockAdmin:NuzXLnuPtrY67rS8@cluster0.tprtt.mongodb.net/rock?retryWrites=true&w=majority");

app.use(cors());

app.use("/categories", require("./routers/categories"));
// app.use("/articles", require("./routers/articles"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
