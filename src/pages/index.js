import { Montserrat, DM_Sans } from "next/font/google";
import Landing from "@/components/landing/Landing";
import Whitby from "@/components/landing/Whitby";
import Registration from "@/components/landing/Registration";
import Priscription from "@/components/landing/Priscription";
import News from "@/components/landing/News";
import Welcome from "@/components/landing/Welcome";
import Specialist from "@/components/landing/Specialist";
import Why from "@/components/landing/Why";
import Head from "next/head";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${dmSans.variable}`}>
      <Head>
        <title>Vallewview Medical Centre</title>
      </Head>
      <main className="">
        <Landing />
        <Whitby />
        <Registration />
        <Priscription />
        <News />
        <Welcome />
        <Specialist />
        <Why />
      </main>
    </div>
  );
}
