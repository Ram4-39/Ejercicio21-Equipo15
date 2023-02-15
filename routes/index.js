const adminRoutes = require("./adminRoutes");
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./userRoutes");
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");

module.exports = (app) => {
  app.use(makeUserAvailableInViews);
  app.use("/", adminRoutes);
  app.use("/", apiRoutes);
  app.use("/", homeRoutes);
  app.use("/", userRoutes);
};
