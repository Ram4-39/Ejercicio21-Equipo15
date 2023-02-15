const bcrypt = require("bcryptjs");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("../models");

module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_TEXT,
      resave: false, // Docs: "The default value is true, but using the default has been deprecated".
      saveUninitialized: false, // Docs: "The default value is true, but using the default has been deprecated".
    })
  );

  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, validationDone) => {
      try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
          //console.log("Nombre de usuario no existe.");
          return validationDone(null, false, {
            message: "Credenciales incorrectas.",
          });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          //console.log("La contraseña es inválida.");
          return validationDone(null, false, {
            message: "Credenciales incorrectas.",
          });
        }
        console.log("Credenciales verificadas correctamente");
        return validationDone(null, user);
      } catch (error) {
        validationDone(error);
      }
    })
  );

  passport.serializeUser((user, validationDone) => {
    validationDone(null, user.id);
  });

  passport.deserializeUser(async (id, validationDone) => {
    try {
      const user = await User.findByPk(id);
      validationDone(null, user); // Usuario queda disponible en req.user.
    } catch (err) {
      validationDone(err);
    }
  });
};
