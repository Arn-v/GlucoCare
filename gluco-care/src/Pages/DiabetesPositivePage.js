import PredictionNote from "../components/PredictionNote";
import "../index2.css"

function DiabetesPositivePage()
{

   return (

     <div className="positive-page">

        <div className="result">

            <h4>Result</h4>
            
            <div>
                <h1>You have Diabetes Risk</h1>
                <p>85% Accurate</p>
            </div>

            <p>"According to predictions it seems that you may be at risk for diabetes</p>

        </div>

        <PredictionNote />

        {/* <div className="steps-section">

         <div className="steps-container">

          <h2>5 Essential Next Steps to Follow</h2>

            <div className="step">

              <p><span className="step-title">1. Consult a Healthcare Professional:</span> Schedule an appointment with a healthcare provider
               for confirmation and personalized guidance.
              </p>

              <button className="booking-btn">Book a Consultation</button>
             </div>



             <div className="step">

              <p><span className="step-title">2. Adopt Healthy Lifestyle Habits:</span> Make lifestyle changes such as healthy eating and
               regular exercise.
               </p>


              <div>
                <a href="/article"><p>Dealing with diabetes</p></a>
                <p>View full article</p>
              </div>

             </div>



             <div className="step">
              <p><span className="step-title">3. Monitor Blood Glucose Levels:</span> Regularly monitor blood glucose levels as advised by the healthcare provider.</p>
             </div>



             <div className="step">
              <p><span className="step-title">4. Manage Weight: </span>If overweight, aim for gradual weight loss through diet and exercise.
              </p>
             </div>



             <div className="step" >
              <p><span className="step-title">5. Educate Yourself:</span> Learn about diabetes and its management to make informed decisions about your health.</p>
             </div>

     
          </div>

        </div> */}


     </div>
   )
}

export default DiabetesPositivePage ; 