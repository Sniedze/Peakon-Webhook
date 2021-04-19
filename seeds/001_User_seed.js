const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  return knex("users")
    .del() // Deletes ALL existing entries

    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Bob",
          last_name: "Brown",
          email: "bob@bob.com",
          password: bcrypt.hashSync("bob666666", 10),
        },
        {
          first_name: "Walter",
          last_name: "White",
          email: "waw@waw.com",
          password: bcrypt.hashSync("waw666666", 10),
        },
        {
          first_name: "Sarah",
          last_name: "Connor",
          email: "sac@sac.com",
          password: bcrypt.hashSync("sac666666", 10),
        },
        {
          first_name: "John",
          last_name: "Snow",
          email: "jos@jos.com",
          password: bcrypt.hashSync("jos666666", 10),
        },
        {
          first_name: "Harry",
          last_name: "Potter",
          email: "hap@hap.com",
          password: bcrypt.hashSync("hap666666", 10),
        },
      ]);
    });
};
