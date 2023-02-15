const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.showLogin);

//router.post("/login", articleController.update);

//router.get("/registro", articleController.destroy);

//router.post("/registro", articleController.update);

//router.get("/logout", articleController.destroy);

module.exports = router;
