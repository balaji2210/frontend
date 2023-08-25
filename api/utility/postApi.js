import axios from "axios";

export const postApi = async (url, data) => {
  try {
    const { data: response, status } = await axios.post(
      `https://wild-ruby-iguana-slip.cyclic.cloud
/${url}`,
      data
    );

    return {
      data: response?.data,
      message: response?.message || data?.message,
      success: status === 200,
    };
  } catch (error) {
    return {
      data: null,
      message: error?.response?.data?.error || "Server Error",
      success: false,
    };
  }
};

export const postApiAuth = async (url, data) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage?.getItem("token") : null;
    const { data: response, status } = await axios.post(
      `https://wild-ruby-iguana-slip.cyclic.cloud
/${url}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      data: response?.data,
      message: response?.message || data?.message,
      success: status === 200,
    };
  } catch (error) {
    return {
      data: null,
      message: error?.response?.data?.error || "Server Error",
      success: false,
    };
  }
};
