require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const passportConfig = require("./passport/passportConfig");
const port = process.env.APP_PORT;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());
passportConfig(app);

routes(app);

dbInitialSetup();

app.listen(port, () => {
  console.log(`Listening... http://localhost:${port}`);
});
