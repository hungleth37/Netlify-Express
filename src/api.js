const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});
router.get("/page1", (req, res) => {
  res.json({
    hello: "Page1!"
  });
});
app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
