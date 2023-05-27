// import
import express from 'express';

import dotenv from 'dotenv';

import colors from 'colors';

// Dot env Config
dotenv.config();


// Rest Object
const app = express();

// Rout Create
app.get("/", (request, response) => {
    response.send("<h1>Welcome to JobFinder!</h1>");
});

// port
const port = process.env.PORT || 8080;

// Listen
app.listen(port, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} mode on port ${port}`.bgMagenta.white);
});