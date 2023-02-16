const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/login", userController.showLogin);

router.post("/login", userController.login);

router.get("/registro", userController.showRegister);

router.post("/registro", userController.register);

router.get("/logout", isAuthenticated, userController.logout);

module.exports = router;
