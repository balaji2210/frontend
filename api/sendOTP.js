const { postApi } = require("./utility/postApi");

const sendOTP = async (data) => {
  const response = await postApi(`user`, data);
  return response;
};

export { sendOTP };
