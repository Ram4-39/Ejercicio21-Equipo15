const { Article, User, Comment } = require("../models");
const passport = require("passport");

const showLogin = (req, res) => {
  res.render("login");
};

const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    console.log("logout successfull");
    res.redirect("/login");
  });
};

const showRegister = (req, res) => {
  res.render("register");
};

const register = (req, res) => {};

module.exports = { showLogin, login, logout, showRegister };
