if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const moviesRouter = require("./movies/movies.router");

console.log("This is the server going!!")

app.use(cors);
app.use(express.json());

app.get("/movies", (req, res) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>> SOMETHING HERE!!")
});

app.use((req, res, next) => {
    next({ status: 404, message: `Not Found: ${req.originalUrl}`}
    );
});

app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = `Something went wrong!` } = error;
    res.status(status).json({error: message});
});

// app.use(notFound);
// app.use(errorHandler);

module.exports = app;

