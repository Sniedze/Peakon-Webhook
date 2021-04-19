const express = require("express");
const router = express();
const webhooksRoute = require(__dirname + "/webhooks.js");

router.use("/webhooks", webhooksRoute);

module.exports = router;
