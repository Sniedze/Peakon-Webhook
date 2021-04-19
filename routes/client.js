const express = require("express");
const router = express();

router.post("/", async (req, res, next) => {
  const { token, payload } = req.body;
  try {
    return res.status(200).send(token);
  } catch (err) {
    next({ status: 400, response: "Failed to create a movie" });
  }
});

module.exports = router;
