const express = require("express");
const router = express.Router();

// localhost:3000/api/
router.get("/", (req, res) => {
  res.send("default url for goods.js GET Method");
});

// localhost:3000/apis/about
router.get("/about", (req, res) => {
  res.send("goodsjs about PATH");
});

module.exports = router;
