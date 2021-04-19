const express = require("express");
const app = express();
const webhooksRoute = require(__dirname + "/webhooks.js");

app.use("/webhooks", webhooksRoute);

module.exports = app;
