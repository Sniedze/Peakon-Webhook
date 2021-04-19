const axios = require("axios");

const postToWebhooks = async (token, payload, links) => {
  data = { payload, token };

  try {
    axios
      .all([
        await links.map((link) => {
          axios({
            method: "post",
            url: link,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data,
          });
        }),
      ])
      .then(
        axios.spread((response) => {
          console.log("response", response);
        })
      );

    return { success: true, body: { payload, data } };
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = { postToWebhooks };
