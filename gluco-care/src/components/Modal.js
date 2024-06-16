import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import 'animate.css'; 

function Modal({ showModal , setShowModal })
{
    const navigate = useNavigate() ; 

    // if(showModal){
    //   console.log("modal bkl show hojaaa") ;
    // }

    function clickHandler(){
        navigate("/question") ;
    }


  return(

   <div className="modal-screen">

    <div className="modal-container animate__animated animate__zoomIn  animate__faster" >
    {/* <div className={ `modal-container ${showModal ? "active" : ""} `} > */}

        <div className="modal-content">

            <div className="modal-header">
                <h3 className="modal-heading">Kindly Note:</h3>
                <div className="modal-cross-btn" onClick={()=>setShowModal(false)} ><RxCross2/></div>
               

            </div>

            <div className="modal-info"> 
                <p>Before proceeding with the Diabetes Predictor Test, please ensure you have the following 
                    metrics ready for a smooth and efficient experience:</p>
            </div>


                <ul className="modal-list">
                    <li>• Age</li>
                    <li>• Frequency of Gestational Diabetes</li>
                    <li>• BMI</li>
                    <li>• History of Diabetes</li>
                    <li>• Blood Glucose Level</li>
                    <li>• Blood Pressure Reading</li>
                    <li>• Skin Thickness</li>
                    <li>• Insulin Sensitivity</li>
                </ul>



            <div className="modal-btn-container">
                <button onClick={clickHandler}>Proceed</button>
                <button>Book a health test instead </button>

            </div>

        </div>

     </div>


     {/* Overlay behind the Modal on the screen */}
     <div className={`overlay  ${showModal ? 'active' : ''} `} 
        /* onClick={() => setShowModal(false)}*/  >

     </div>


   </div>

  )
}

export default Modal ;

