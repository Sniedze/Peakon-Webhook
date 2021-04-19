const { Model } = require("objection");

class Webhook extends Model {
  static get tableName() {
    return "webhooks";
  }
  static get relationMappings() {
    const User = require("./User");

    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "webhooks.user_id",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Webhook;
