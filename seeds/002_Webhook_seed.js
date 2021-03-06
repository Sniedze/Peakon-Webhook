exports.seed = function (knex) {
  return knex("webhooks")
    .del() // Deletes ALL existing entries

    .then(function () {
      // Inserts seed entries
      return knex("webhooks").insert([
        {
          user_id: "1",
          url: "http://61e9a97c77aa.ngrok.io",
          token: "wild",
        },
        {
          user_id: "2",
          url: "http://61e9a97c77aa.ngrok.io",
          token: "west",
        },
        {
          user_id: "1",
          url: "http://61e9a97c77aa.ngrok.io",
          token: "north",
        },
        {
          user_id: "3",
          url: "http://61e9a97c77aa.ngrok.io",
          token: "wind",
        },
      ]);
    });
};
