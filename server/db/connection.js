// dependencies and imports
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { MongoClient } = require("mongodb");
// variables
const Db = process.env.ATLAS_URI;
const secret = process.env.SECRET;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
// exports  for db connection
module.exports = {
  connectToServer: async function () {
    try {
      await client.connect();
      _db = client.db("ServerlessInstance0");
      console.log("Successfully connected to mongoDB!");
    } catch (error) {
      console.error("Cannot connect to MongoDB", error);
    }
  },
  setUpSession: function (app) {
    app.use(
      session({
        secret: secret,
        store: new MongoStore({
          client: client,
          mongoURL: Db,
          dbName: "serverlessInstance0",
          stringify: false,
        }),
        resave: false,
        saveUninitialized: true,
      })
    );
  },

  getDb: function () {
    return _db;
  },
};
