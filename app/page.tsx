import { HomeHero } from "./component/HomeHero";
import { About } from "./component/About";
import Services from "./component/Services";
import CaseStudies from "./component/CaseStudies";

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
