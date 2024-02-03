// dependencies for app
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport'); 
// configuration for dotenv
require("dotenv").config({ path: "./config.env" });
// declaring the port to be used for the server
const PORT = process.env.PORT || 3001;
// cors setup for backend to frontend communication
// const allowedOrigin = ["https://eformative.com"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigin.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("not allowed by cors"));
//     }
//   },
// };
// express middleware
// app.use(cors(corsOptions));

// passport setup for authentication
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

// middleware for routes
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/page"));

// code for react serverless functioning
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// connection for the db
const db = require("./db/connection");

// function to make the server listen
app.listen(PORT, () => {
  db.connectToServer(function (err) {
    if (err) {
      console.error("App was unable to connect to database",err);
      process.exit(1);
    } else {
      db.setUpSession(app);
    }
  });
  console.log(`Server is listening on ${PORT}`);
});
