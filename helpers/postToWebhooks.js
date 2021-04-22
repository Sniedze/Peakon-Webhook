const axios = require("axios");
const { response } = require("../routes/client");

const postToWebhooks = async (userWebhookData) => {
  const data = { payload: { message: "Updated info" }, token };
  const requests = await userWebhookData.map(({ url, token }) => {
    axios({
      method: "post",
      url,
      data,
    });
  });
  try {
    const responses = await axios.all(requests);
    const responseArray = await axios.spread(...responses);

    return { success: true, body: { response: data } };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { postToWebhooks };
