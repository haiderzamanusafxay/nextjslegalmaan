import { HomeHero } from "./component/HomeHero";
import { About } from "./component/About";
import Services from "./component/Services";
import CaseStudies from "./component/CaseStudies";
import Testimonials from "./component/Testimonials";

const Home = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
    </>
  );
};

export default Home;
