import { AppProps } from "next/app";
import "./_app.scss";

export default function App({ Component, pageProps, ...props }: AppProps) {
  return (
    <>
      <Component />
    </>
  );
}
