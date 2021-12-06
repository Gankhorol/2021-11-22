const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());

const loggedIn = false;

app.use((req, res, next) => {
    console.log("My middleware");

    if (loggedIn) {
        next();
    } else {
        res.sendStatus(401).end("Unauthorized");
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/categories", require("./routers/categories"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
