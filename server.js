//Express
const express = require("express");

// Rest Object
const app = express();

// Rout Create
app.get("/", (request, response) => {
    response.send("<h1>Welcome to JobFinder!</h1>");
});

// 