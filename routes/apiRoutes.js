const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const apiController = require("../controllers/apiController");

router.get("/articles", articleController.index);
router.get("/articles/:id", apiController.show);

module.exports = router;
