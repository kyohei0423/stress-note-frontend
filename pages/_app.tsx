import { AppProps } from "next/app";

import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}
