import axios from "axios";

export const getApi = async (url) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage?.getItem("token") : null;
    const { data: response, status } = await axios.get(
      `https://wild-ruby-iguana-slip.cyclic.cloud
/${url}`,
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
