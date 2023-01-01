const express = require("express");
const cors = require("cors");
const observationsRouter = require('./observations/observations.router')

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(cors())
app.use(express.json());

app.use("/observations", observationsRouter);


app.use(notFound);
app.use(errorHandler);

module.exports = app;
