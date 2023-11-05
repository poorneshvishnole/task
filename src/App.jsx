import FreeTutorial from "./Components/FreeTutorial";
import Header from "./Components/Header";
import PopularCourses from "./Components/PopularCourses";
import Features from "./Components/Features";
import Steps from "./Components/Steps";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import Ready from "./Components/Ready";
import Faq from "./Components/Faq";
import Tutorial from "./Components/Tutorial";

const App = () => {
  return (
    <div>
      <Header />
      <Tutorial />
      <Features />
      <PopularCourses />
      <Steps />
      <Pricing />
      <FreeTutorial />
      <Faq />
      <Ready />
      <Footer />
    </div>
  );
};

export default App;
