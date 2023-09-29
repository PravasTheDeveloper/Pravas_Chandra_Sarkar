import AboutSection from "../../components/About/AboutSection";
import HomePage from "../../components/HeroHome/HomePage";
import PorfolioSection from "../../components/Portfolio/PorfolioSection";
import SkillPenel from "../../components/Skills/SkillPenel";

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <AboutSection />
        <SkillPenel />
        <PorfolioSection />
      </main>
    </>
  )
}
