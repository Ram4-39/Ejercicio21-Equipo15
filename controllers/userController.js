const { Article, User, Comment } = require("../models");

function showLogin(req, res) {
  res.render("login");
}

module.exports = { showLogin };
