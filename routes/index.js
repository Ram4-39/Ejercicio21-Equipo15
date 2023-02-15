const adminRoutes = require("./adminRoutes");
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/", adminRoutes);
  app.use("/", apiRoutes);
  app.use("/", homeRoutes);
  app.use("/", userRoutes);
};
