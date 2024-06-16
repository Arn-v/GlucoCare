import { useSearchParams } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import DiabetesPositivePage from "./DiabetesPositivePage";
import DiabetesNegativePage from "./DiabetesNegativePage";

function PredictionPage()
{
    const [searchParams , setSearchParams] = useSearchParams() ; 

    const page = searchParams.get("page") ; 

    console.log(page) ; 



   return (

    <div className="prediction-page">

        <Navbar2 />

      { (page==="positve") ?  <DiabetesPositivePage /> : <DiabetesNegativePage/>}


        {/* <div className="steps-section">

            <div className="more-container">

                <div className="consultation-container">

                    <p className="recommend">It still is recommended to consult a healthcare professional</p>

                    <p className="booking-line">Schedule an appointment with a healthcare provider for confirmation and personalized guidance.
                    </p>

                    <button className="booking-btn">Book a Consultation</button>

                </div>

            </div>

        </div> */}



     

    </div>
   )
}

export default PredictionPage ; 