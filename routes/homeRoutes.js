const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");
const homeController = require("../controllers/homeController");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/", homeController.index);

router.get("/article/:id", homeController.articles);

router.post(
  "/article/:id/create-comment",
  isAuthenticated,
  commentsController.store
);

router.get("/api", homeController.api);

module.exports = router;
