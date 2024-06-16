import { motion } from "framer-motion";
import "./index.css"
import React from "react";

function transition(OgComponent) 
{
  return(props) => (
    <>

      <OgComponent {...props}/>

      <motion.div 
        className="slide-in"
        intial={{scaleY:0}}
        animate={{scaleY:0}}
        exit={{scaleY:1}}
        transition={{duration:1.5 , ease:[0.22,1,0.36,1]}}
      />

      <motion.div 
        className="slide-out"
        intial={{scaleY:1}}
        animate={{scaleY:0}}
        exit={{scaleY:0}}
        transition={{duration:1.5 , ease:[0.22,1,0.36,1]}}
      />

    </>
  )
}


export default transition ; 