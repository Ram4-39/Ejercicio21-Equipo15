const { Article, User } = require("../models");
const formidable = require("formidable");

const show = async (req, res) => {
  const articles = await Article.findAll({ where: { user_id: req.params.id } });
  return res.json(articles);
};

module.exports = { show };
