const { Article, User, Comment } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { format } = require("date-fns");

const showLogin = (req, res) => {
  res.render("login");
};

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: req.session.redirectTo ? req.session.redirectTo : "/",
    failureRedirect: "/login",
  })(req, res);
}

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

const register = async (req, res) => {
  const [user, created] = await User.findOrCreate({
    where: { username: req.body.username },
    defaults: {
      password: await bcrypt.hash(req.body.password, 10),
    },
    // createdAt: "",
    // updatedAt: "",
  });

  if (created) {
    req.login(user, () => res.redirect("/admin"));
  } else {
    res.redirect("/login");
  }
};

module.exports = { showLogin, login, logout, showRegister, register };
