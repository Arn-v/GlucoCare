
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import TrustedBySection from "../components/TrustedBySection"
import Footer from "../components/Footer"
import AboutSection from "../components/AboutSection"
import girlImage from "../components/assets/GirlSitting.png"
import transition from "../Transition"

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function HomePage()
{
  return(
    <div className="home-page">

        <Navbar />

        <HeroSection />

        <TrustedBySection />

        <AboutSection />

        <Footer />


        <div className="girl-img-container">
          <img id="girl-img" src={girlImage}  alt="Girl"/>
       </div>

     
    </div>
  )
}

export default HomePage ;  


// class -> className 