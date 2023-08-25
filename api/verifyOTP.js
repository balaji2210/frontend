const { postApi } = require("./utility/postApi");

const verifyOTP = async (data) => {
  const response = await postApi(`verify`, data);
  return response;
};

export { verifyOTP };
