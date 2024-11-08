import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";
import Appointment from "../../components/Appointment/Appointment";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Topbar/Topbar";
import Faq from "../../components/FAQ/Faq";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import MoveToTop from "../../components/MoveToTop/MoveToTop";
import Contact from "../../components/Contact/Contact";
import Testimonials from "../../components/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Topbar />
      <Navbar/>
      <Header/>
      <About/>
      <Achievements/>
      <Services/>
      <Appointment/>
      <Faq/>
      <Testimonials/>
      <Gallery/>
      <Contact/>
      <Footer/>
      <MoveToTop/>
    </>
  );
};

export default Homepage;
