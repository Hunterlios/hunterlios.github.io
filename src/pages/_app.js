import "@/styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
