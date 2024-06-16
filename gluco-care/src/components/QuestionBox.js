

function QuestionBox({question,formData,setFormData,Q,setQ})
{
  let  ques = question.ques ; 
  let  answerGuide = question.answerGuide ; 
  let unit = question.unit ; 
  let name = question.name ; 
  
  // console.log( name ) ; 


  function changeHandler( event )
  {
    setFormData( (prevState) => {

        return {
            ...prevState ,
            [event.target.name] : event.target.value 
        }

    })
  }


  function handleKeyDown(event)
  {
    if(event.key === "Enter" && Q<8 ){
      event.preventDefault() ;
      setQ(Q+1) ;
    }
  }



  return(

    <div className="question-box">

        <div className="ques">
            <label>{ques}</label>
        </div>

        <div className="ans-input-container">
             
            <input type="text" onChange={changeHandler} name={name} value={formData[name]} 
              onKeyDown={handleKeyDown}
            ></input>

            <span>{unit}</span>

            <div className="line"></div>

            <p className="answer-guide">{answerGuide}</p>
        </div>


    </div>
  )
}

export default QuestionBox ; 