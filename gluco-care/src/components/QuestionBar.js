import { IoCaretBackSharp } from "react-icons/io5";
import { IoCaretForwardSharp } from "react-icons/io5";

function QuestionBar({Q,setQ})
{
  return(

    <div className="question-bar">

        {  Q>1 ? <div class="ques-arrow-icon" onClick={()=>(setQ(Q-1))}><IoCaretBackSharp/></div>: null }

        {/* <div>Question Bar</div> */}

        {  Q<8 ? <div class="ques-arrow-icon" onClick={()=>(setQ(Q+1))}><IoCaretForwardSharp/></div> : null  }

    </div>
  )
}

export default QuestionBar ; 