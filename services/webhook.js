const Webhook = require(__dirname + "/../models/Webhook");
const { postToWebhooks } = require(__dirname + "/../helpers/postToWebhooks");

const webhookRegisterService = async (user, url, token) => {
  try {
    const webhook = await Webhook.query().insert({
      user_id: user.id,
      url,
      token,
    });

    return { success: true, body: webhook };
  } catch (err) {
    return { success: false, error: err };
  }
};

const webhookTriggerService = async (user) => {
  token = "foo";
  try {
    const userWebhookData = await Webhook.query()
      .select("url", "token")
      .where("user_id", user.id);
    const result = await postToWebhooks(userWebhookData);

    return result;
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = {
  webhookRegisterService,
  webhookTriggerService,
};
