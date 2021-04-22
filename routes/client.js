const express = require("express");
const router = express();

router.post("/", async (req, res, next) => {
  try {
    return res.status(200).send({ response: "Data updated" });
  } catch (err) {
    next({ status: 400, response: "Failed to receive webhooks" });
  }
});

module.exports = router;
