const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const session = require("express-session");
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const db = require("./db/connection");
const flash = require("connect-flash");
require("dotenv").config({ path: "./config.env" });

passport.use(
  "local",
  new LocalStrategy((username, password, done) => {
    let db_connect = db.getDb();
    db_connect
      .collection("users")
      .findOne({ username })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: "Incorrect password." });
        });
      })
      .catch((err) => {
        return done(err);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  let db_connect = db.getDb();
  db_connect
    .collection("users")
    .findOne({ _id: id })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(flash());

app.use(passport.session());
app.use(passport.initialize());

module.exports = {
  passport,
  session,
};
