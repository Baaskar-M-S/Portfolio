import Aboutpage from "./Components/Aboutpage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProjectPage from "./Components/Projects";
import ServicePage from "./Components/ServicePage";
import Homepage from "./Components/Homepage";

const RouteController = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <ServicePage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default RouteController;
