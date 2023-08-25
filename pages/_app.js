import Theme from "../styles/theme";

import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  axios.defaults.headers.common["x-access-token"] =
    typeof window !== "undefined" && window.localStorage.getItem("token")
      ? window.localStorage.getItem("token")
      : null;
  return (
    <Theme>
      <ToastContainer />
      <Component {...pageProps} />;
    </Theme>
  );
}
