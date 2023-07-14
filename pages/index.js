import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Harry Jones | Digital Designer</title>
        <meta name="Riding the Waves of Design & Events for 5 years! Passionate about crafting exceptional brands and helping companies thrive. On the side, I share my Adventurous expertise, teaching people to make a splash (with unforgettable experiences). Let's connect and create something amazing together! 🤝" content="Bleep boop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
