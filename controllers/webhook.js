const { webhookRegisterService, webhookTriggerService } = require(__dirname +
  "/../services/webhook");
const User = require(__dirname + "/../models/User");

const registerWebhook = async (req, res, next) => {
  const { url, user_id, token } = req.body;

  try {
    //Check if request body provides url and user_id
    if (!user_id || !url || !token)
      return res.status(500).send({ response: "Invalid data" });

    //Check if there is a user with this id, throw an error if not.
    const user = await User.query().findById(user_id);
    if (!user) return res.status(500).send({ response: "No user found in DB" });

    const result = await webhookRegisterService(user, url, token);
    return result.success === true
      ? res.status(200).send(` Webhook url ${result.body.url} registred`)
      : res.status(204).send(result.err);
  } catch (err) {
    next({ status: 400, response: err });
  }
};
const triggerWebhook = async (req, res, next) => {
  const { payload, user_id } = req.body;
  try {
    //Check if request body provides payload and user_id
    if (!user_id || !payload)
      return res.status(500).send({ response: "Invalid data" });

    //Check if there is a user with this id, throw an error if not.
    const user = await User.query().findById(user_id);
    if (!user) return res.status(401).send({ response: "No user found in DB" });

    const result = await webhookTriggerService(user);
    return result.success === true
      ? res.status(200).send(result.body)
      : res.status(204).send(result.error);
  } catch (err) {
    next({ status: 400, response: err });
  }
};

module.exports = {
  registerWebhook,
  triggerWebhook,
};
