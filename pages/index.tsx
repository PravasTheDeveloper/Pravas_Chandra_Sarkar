import AboutSection from "@/components/About/AboutSection";
import HomePage from "@/components/HeroHome/HomePage";
import PorfolioSection from "@/components/Portfolio/PorfolioSection";
import SkillPenel from "@/components/Skills/SkillPenel";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PRAVAS CHANDRA SARKAR</title>
        <link rel="icon" href="/icon.png" sizes="any" />
      </Head>
      <HomePage />
      <AboutSection />
      <SkillPenel />
      <PorfolioSection />
    </>
  )
}