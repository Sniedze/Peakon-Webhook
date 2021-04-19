const express = require("express");
const router = express.Router();
const { registerWebhook, triggerWebhook } = require(__dirname +
  "/../controllers/webhook");

const { checkToken } = require(__dirname + "/../helpers/middlewares.js");

router.post("/", registerWebhook);
router.post("/test", triggerWebhook);
router.post("/listening");
module.exports = router;
