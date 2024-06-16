import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function TrustedBySection()
{
   return(

    <div className="trusted-by-section">

        <div data-aos="fade-right" data-aos-offset="0" data-aos-duration="1000" className="trusted-by-content">

            <div className="trusted-main-content">
                <p>Trusted by <span>150,000+</span> healthcare patients</p>
            </div>

            <p className="trusted-secondary-content">All over the world</p>

        </div>

        


    </div>
   )
}

export default TrustedBySection ; 