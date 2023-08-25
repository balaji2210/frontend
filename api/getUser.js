const { getApi } = require("./utility/getApi");

const getUser = async () => {
  const response = await getApi(`getUser`);
  return response;
};

export { getUser };
