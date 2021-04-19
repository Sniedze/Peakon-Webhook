const Webhook = require(__dirname + "/../models/Webhook");
const User = require(__dirname + "/../models/User");
const { postToWebhooks } = require(__dirname + "/../helpers/postToWebhooks");

const webhookRegisterService = async (user, url) => {
  try {
    const webhook = await Webhook.query().insert({
      user_id: user.id,
      url,
    });

    return { success: true, body: webhook };
  } catch (err) {
    return { success: false, error: err };
  }
};

const webhookTriggerService = async (user, payload) => {
  registredToken = "foo";
  try {
    const userUrls = await Webhook.query()
      .select("url")
      .where("user_id", user.id);
    const links = userUrls.map((link) => link.url);
    //console.log(payload);
    return await postToWebhooks(token, payload, links);
    //return { success: true, body: { payload, postedToWebhooks } };
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = {
  webhookRegisterService,
  webhookTriggerService,
};
