const { postApi } = require("./utility/postApi");

const resendOTP = async (data) => {
  const response = await postApi(`resend`, data);
  return response;
};

export { resendOTP };
