//Express
const express = require("express");

// Rest Object
const app = express();

// Rout Create
app.get("/", (request, response) => {
    response.send("<h1>Welcome to My JobFinder!</h1>");
});

// Listen
app.listen(8080, () => {
    console.log("Node Server Running");
});