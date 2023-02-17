"use strict";


const express = require("express");

const { NotFoundError } = require("./expressError");


const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(express.json());

app.use("/auth", authRoutes);


app.use(function (req, res, next) {
    return next(new NotFoundError());
});

app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;
