const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Webhook = require("./Webhook");

    return {
      webhooks: {
        relation: Model.HasManyRelation,
        modelClass: Webhook,
        join: {
          from: "users.id",
          to: "webhooks.user_id",
        },
      },
    };
  }
}

module.exports = User;
