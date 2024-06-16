import { MdArrowBack } from "react-icons/md";
import GlucoCareIcon from "./assets/GlucoCareIcon.png"
import { NavLink } from "react-router-dom";

function Navbar2(){

   return(
    <nav>
      <div className="navbar-2">

        <MdArrowBack className="back-arrow" />

        <h2>Diabetes Predictor Test</h2>

        <NavLink to="/"><img src={GlucoCareIcon} alt="GlucoCare-Icon"></img></NavLink>
        

      </div>
    </nav>
   )
}


export default Navbar2 ;


