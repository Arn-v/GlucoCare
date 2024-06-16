import PredictionNote from "../components/PredictionNote";


function DiabetesNegativePage()
{
   return (

     <div className="negative-page">

       <div className="result">

          <h4>Result</h4>

          <div>
             <h1 id="negative-title">You do not have Diabetes Risk</h1>
             <p>85% Accurate</p>
          </div>

          <p>"According to predictions it seems that you may be not be at risk for diabetes</p>

       </div>

       <PredictionNote />

       {/* <div className="steps-section">

         <div className="more-container">

            <div className="consultation-container">

               <p className="recommend">It still is recommended to consult a healthcare professional</p>

                <p className="booking-line">Schedule an appointment with a healthcare provider for confirmation and personalized guidance.
                 </p>

                <button className="booking-btn">Book a Consultation</button>

            </div>

            <div className="additional-container">

                <h3>Additional Resources on Diabetes</h3>

                <div>
                  <a href="/article"><p>Dealing with diabetes</p></a>
                   <p>View full article</p>
                </div>


            </div>

         </div>

      </div> */}

     </div>

   )

}

export default DiabetesNegativePage ; 