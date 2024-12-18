import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "@/styles/globals.css";
import { dmSan, montserrat } from ".";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
