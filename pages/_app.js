import "@/styles/Navbar.css";
import "@/styles/Cart.css";
import "@/styles/Products.css";
import "@/styles/globals.css";
import "@/styles/Singlepage.css";
import "@/styles/id.css";
import { Provider } from "react-redux";
import store from "@/public/store/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
