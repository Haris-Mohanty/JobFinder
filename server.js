//Express
import express from 'express';

// Rest Object
const app = express();

// Rout Create
app.get("/", (request, response) => {
    response.send("<h1>Welcome to JobFinder!</h1>");
});

// Listen
app.listen(8080, () => {
    console.log("Node Server Running on Port 8080");
});