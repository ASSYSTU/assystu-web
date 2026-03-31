import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { newsreader, inter } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${newsreader.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
