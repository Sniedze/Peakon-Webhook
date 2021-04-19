const express = require("express");
const helmet = require("helmet");
const { Model } = require("objection");
const Knex = require("knex");
const knexFile = require(__dirname + "/knexfile.js");
const knex = Knex(knexFile.development);

const apiRoutes = require(__dirname + "/routes/api");
const port = process.env.PORT || 9876;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet()); //Provides 15 security middlewares.
Model.knex(knex);

app.use("/api", apiRoutes);

const server = app.listen(port, (error) => {
  if (error) console.log("Error running Express server");
  console.log("Server is running on port", server.address().port);
});

module.exports = server;
