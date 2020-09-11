import { Provider } from "react-redux";
import { AppProps } from "next/app";

import store from "@redux/store";

import "styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}
