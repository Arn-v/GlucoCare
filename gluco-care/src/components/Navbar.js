import { NavLink } from "react-router-dom";
import GlucoCareIcon from "./assets/GlucoCareIcon.png" ;


function Navbar(){

    return (

        <nav>
            <div className="navbar">

                <NavLink to="/"><img src={GlucoCareIcon} alt="GlucoCare-Icon"></img></NavLink>

                
                <div className="nav-links">

                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/health-tests">Health Tests</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>

                </div>


            </div>
        </nav>
    )

}

export default Navbar ;