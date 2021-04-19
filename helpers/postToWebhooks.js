const axios = require("axios");

const postToWebhooks = async (token, payload, links) => {
  data = { payload, token };
  console.log(links);

  try {
    const res = await links.map((url) => {
      //await axios.post(url, data);
      console.log(url);
    });
    return res;
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = { postToWebhooks };
