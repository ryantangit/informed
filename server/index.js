const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/api", (req, res) => {
    res.send({message: "Hello World!"});
});

app.listen(PORT, () => {
    console.log(`SERVER listening on ${PORT}`);
});