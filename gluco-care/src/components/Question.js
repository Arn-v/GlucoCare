import { useState } from "react";
import questions from "../data/questionData";
import QuestionBar from "./QuestionBar";
import QuestionBox from "./QuestionBox";
import { useNavigate } from "react-router-dom";

function Question()
{
   const [ Q , setQ ] = useState(1) ; 
   // Q -> current question jispe hai

   const navigate = useNavigate() ; 

   const [formData , setFormData] = useState({
                                                age : null , 
                                                pregnancies : null , 
                                                BMI : null  , 
                                                DBF: null ,    //what the fuck  memebrs has to do with it 
                                                glucoseLevel: null ,
                                                bloodPressure : null , 
                                                skinThickness : null ,
                                                insulin : null  ,
                                             }) 


    function predictOutcome( formData )
     {
         const  { age , pregnancies , BMI , DBF , glucoseLevel , bloodPressure , skinThickness , insulin } = formData ; 

         const  weights = [0.306927307, 1.00994568, -0.211467828, 0.000365719752, -0.167546784, 0.616582733, 0.255160514, 0.0738895857 ] ; 
         const bias = -0.7382065636069491 ; 

        //  let result = ( weights[0] * pregnancies + weights[1] * glucoseLevel + weights[2] * bloodPressure +
        //  weights[3] * skinThickness + weights[4] * insulin + weights[5] * BMI +
        //  weights[6] * DBF + weights[7] * age + bias ) ;
        console.log("predictiong outcome") ; 

        let result = (
            weights[0] * Number(pregnancies) +
            weights[1] * Number(glucoseLevel) +
            weights[2] * Number(bloodPressure) +
            weights[3] * Number(skinThickness) +
            weights[4] * Number(insulin) +
            weights[5] * Number(BMI) +
            weights[6] * Number(DBF) +
            weights[7] * Number(age) +
            bias
        );
        


        console.log(result) ; 


        if(result > 0.3 ){
            return 1 ; 
        }

        return 0 ; 

    }



    const submitHandler = (event) => {

        event.preventDefault() ; 
        
        console.log("Form Submitted ") ; 
        console.log(formData) ;

        const prediction = predictOutcome(formData) ; 
        let page ; 

        console.log(prediction)

        prediction ? page="positve" : page="negative" ; 

        console.log(page)

        navigate(`/prediction?page=${page}`)
        

    }





    return(

        <div className="question-container">

            <QuestionBar Q={Q} setQ={setQ} />

         <div className="question-wrapper">

           <div className="question-no">
                <p>Question {Q}/8</p>
            </div>

             <form >
              {
                questions.filter( (question) => (question.questionNo === Q) )
                         .map( (question) => { return (
                                     <QuestionBox Q={Q} setQ={setQ} question={question}  formData={formData} setFormData={setFormData} key={question.questionNo}/> 
                                    ) } )
              } 



              <div className="form-btn-container">
               { ( Q === 8 )  ? <button className="submit-btn" onClick={submitHandler}>Submit</button> : null } 
              </div>
            

            </form>



         </div>

        </div>   
        
    )
}


export default Question ; 



// Pregnancies	Glucose	BloodPressure	SkinThickness	Insulin	BMI	DiabetesPedigreeFunction	Age	 Outcome