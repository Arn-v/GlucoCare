import transition from "../Transition"
import Navbar from "../components/Navbar";

function ContactPage()
{
    return(
        <div>
           <Navbar/>
           <h1>CONTACT PAGE</h1>
        </div>
    ) ; 
}

export default transition(ContactPage) ; 