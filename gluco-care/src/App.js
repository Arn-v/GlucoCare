
import HomePage from "./Pages/HomePage";
import { Route , Routes } from "react-router-dom";
import QuestionPage from "./Pages/QuestionPage";
import PredictionPage from "./Pages/PredictionPage";
import ContactPage from "./Pages/ContactPage";
import { AnimatePresence } from "framer-motion";

function App() {

  return(

    <div>

      <AnimatePresence mode="wait">
          <Routes> 
              <Route path="/" element={ <HomePage/> } />
              <Route path="/question" element={<QuestionPage /> }/>
              <Route path="/prediction" element={<PredictionPage/>} />
              <Route path="/contact" element={ <ContactPage/>} />
          </Routes>
      </AnimatePresence>

    </div>
  ) ; 
}

export default App;
