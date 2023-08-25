const { postApiAuth } = require("./utility/postApi");

const updateUser = async (data) => {
  const response = await postApiAuth(`update`, data);
  return response;
};

export { updateUser };
