import axios from "axios";

const checkAuth = async (token) => {
  let result = null;
  if (token) {
    result = await axios.get(`https://wild-ruby-iguana-slip.cyclic.cloud
/checkAuth?token=${token}`);
  }
  if (result?.status === 200) {
    localStorage.setItem("user_id", result?.data?.data?._id);
  }

  return result;
};

export { checkAuth };
