import { About } from "../component/About";
import CaseStudies from "../component/CaseStudies";
import { HomeHero } from "../component/HomeHero";
import Services from "../component/Services";

const Home = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Services />
      <CaseStudies />
    </>
  );
};

export default Home;
