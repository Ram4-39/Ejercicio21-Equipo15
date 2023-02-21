const Article = require("../models/Article");
const { format } = require("date-fns");
const Comment = require("../models/Comment");
const User = require("../models/User");

const index = async (req, res) => {
  const articles = await Article.findAll({ include: User });

  let articleDate = [];
  for (const article of articles) {
    articleDate.push({
      parsedCreatedAt: format(
        article.dataValues.createdAt,
        "MMMM do yyyy, h:mm:ss a"
      ),
      parsedUpdatedAt: format(
        article.dataValues.updatedAt,
        "MMMM do yyyy, h:mm:ss a"
      ),
    });
  }

  return res.render("home", { articles, articleDate });
};

const articles = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findByPk(id, { include: User });

  const parsedArticleDates = {
    parsedCreatedAt: format(article.createdAt, "MMMM do yyyy, h:mm:ss a"),
    parsedUpdatedAt: format(article.updatedAt, "MMMM do yyyy, h:mm:ss a"),
  };

  const comments = await Comment.findAll({
    where: { article_id: req.params.id },
  });

  return res.render("article", {
    articles,
    article,
    parsedArticleDates,
    comments,
  });
};

const api = async (req, res) => {
  const articles = await Article.findAll();
  return res.json({ articles });
};

module.exports = { index, articles, api };
