const Webhook = require(__dirname + "/../models/Webhook");
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
  token = "foo";
  try {
    const userUrls = await Webhook.query()
      .select("url")
      .where("user_id", user.id);
    const links = userUrls.map((link) => link.url);
    //console.log(links);
    const result = await postToWebhooks(token, payload, links);
    return result;
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = {
  webhookRegisterService,
  webhookTriggerService,
};
