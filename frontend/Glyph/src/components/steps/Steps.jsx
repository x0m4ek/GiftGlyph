import React from 'react';
import './Steps.scss';
import Step from '../step/Step1';

function Steps() {
  return (
   <>
   <div className="conteiner">

  
    <div className="steps_wrapper">
        <div className="small-text"><span>Effortlessly Navigate Our Gifting Process</span></div>
        <div className="big-text">
            <h3>
            Seamless Gifting Experience
            </h3>
        </div>
        <div className="steps">
            <Step number={1}/>
            
        </div>
    </div>
    </div>
   </>
  )
}

export default Steps