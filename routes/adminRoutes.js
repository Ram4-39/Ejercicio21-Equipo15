const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/admin", isAuthenticated, articleController.index);

router.get("/admin/create", articleController.create);

router.post("/admin", articleController.store);

router.get("/admin/edit/:id", articleController.edit);

router.post("/admin/edit/:id", articleController.update);

router.get("/admin/delete/:id", articleController.destroy);

module.exports = router;
