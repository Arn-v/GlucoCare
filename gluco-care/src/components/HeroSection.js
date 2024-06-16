import { useState } from "react";
import Modal from "./Modal";
// import Typed from 'typed.js'; 
import React, { useEffect } from 'react' ; 
import { Typewriter ,  } from 'react-simple-typewriter' ;
import arrowImg from "./assets/Vector 24.png" ; 

function HeroSection()
{
    const [ showModal , setShowModal ] = useState(false) ; 
    //for showing modal or not   
    // const modal = document.querySelector('modal-container') ;  

    function clickHandler(){
        setShowModal(true) ;
        console.log("BUTTON CLICKED") ; 

        // console.log(modal) ;
        // modal.classList.add("active") ; 
    }
    // const heroContent = document.querySelector(".hero-content") ;
    // const modal = {Modal} ; 


    // if(showModal){
    //   //Modal dikhana hai...usse active kardena and heroContent wale ko greyish kar den
    //   modal.ClassList.add("acive") ; 
    //   heroContent.ClassList.add("behind") ; 
    // }

    // else{
    //   modal.ClassList.remove("acive") ; 
    //   heroContent.ClassList.remove("behind") ; 
    // }




    // TYPING TEXT ANIMATION
    // const el = useRef(null);


    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //       strings: ['diabete', '<i>GlucoCare</i>'],
    //       typeSpeed: 50,
    //       loop: false, // Do not loop the animation
    //       showCursor: false, // Hide the cursor
    //       onComplete: () => {
    //         // Callback function to remove the 'diabete' text after typing is complete
    //         const span = el.current;
    //         span.innerHTML = ''; // Remove the content of the span
    //       }
    //     });
    
    //     return () => {
    //       typed.destroy();
    //     };
    //   }, []);

    // const [typedInstance, setTypedInstance] = useState(null);
    // const heroTitleRef = useRef(null);

    // useEffect(() => {
    //     const options = {
    //         strings: ['Diabetes', 'GlucoCare'],
    //         typeSpeed: 400,
    //         loop: true, // Set loop to true to repeat the animation indefinitely
    //         // showCursor: false, // Hide the cursor during typing animation
    //         onComplete: (self) => {
    //             // Store the Typed instance in state after the typing animation completes
    //             setTypedInstance(self);
    //         }
    //     };

    //     // Initialize Typed.js on the heroTitleRef element
    //     const typed = new Typed(heroTitleRef.current, options);

    //     // Clean up function to destroy Typed instance when component unmounts
    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);


    // const [autoText] = useTypewriter({
    //     words:["Diabetes" , "GlucoCare"] ,
    //     loop:1 , 
    //     typeSpeed:100 , 
    // })


    const [animationComplete, setAnimationComplete] = useState(false); 
    const [cursorVisible, setCursorVisible] = useState(true);
    const [loopDone , setLoopDone] = useState(false) ; 
 
    useEffect(() => {

         setTimeout(() => {
            setAnimationComplete(true);
        }, 2500);// Set a delay before animating to GlucoCare


    }, []);
 

    
    

    function loopDoneHandler()
    {
       console.log("animation end...hide the cursor ")
       setCursorVisible(false) ; 
       setLoopDone(true) ; 

    }





   return(

    <div className="hero-section">

        <div className="hero-content">

            <h1 className="hero-title">Predict, Prevent, Prosper:
                <span  className="main-title">
                { animationComplete ? (
                    loopDone ? (
                       " GlucoCare"
                     ) : 
                     (
                        <Typewriter
                        words={[' GlucoCare']} 
                        loop={!setLoopDone}
                        cursor={cursorVisible}
                        typeSpeed={130}
                        deleteSpeed={200}
                        delaySpeed={2000}
                        deletedText="Diabetes"
                        // onType={loopDoneHandler}
                        onDelay={loopDoneHandler}
                    />
                     )   
                    ) : 
                    (
                      " Diabetes"
                    )}

                </span>
                  {/* { cursorVisible ?  <Cursor /> : null } */}
                  
                </h1>

            <p className="hero-info">Tailored for women, deciphers your diabetes risk with 
                scientific finesse. Begin your journey today!</p>

            <button onClick={clickHandler} className="hero-start-btn">Let’s get Started</button>

        </div>

       { 
         showModal ? <Modal showModal={showModal} setShowModal={setShowModal} /> : null 
       }
       


       {/* <div className="girl-img-container">
          <img id="girl-img" src={girlImage}  alt="Girl"/>
       </div> */}

       <div className="arrow-img_container">
          <img id="arrow-img" src={arrowImg} alt="arrow"></img>
       </div>




    </div>
   )
}

export default HeroSection ; 