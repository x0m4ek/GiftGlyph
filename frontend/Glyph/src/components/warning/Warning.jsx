import React from 'react';
import "./Warning.scss";
import ArrowNext from "../../images/arrowNExt.png";
import ArrowBack from "../../images/arrowBack.png";

function Warning() {
  return (
   <>
    <div className="warning">
        <div className="conteiner">

            <div className="warning_wrapper">
   
        <div className="back_arrow">
            <img src={ArrowBack} alt="Reload" />
        </div>
        <div className="text">
            <p>Elevate your style, unlock savings. Limited-time discount offer, seize the deal!</p>
        </div>
        <div className="next_arrow">
            <img src={ArrowNext} alt="Reload" />
        </div>
                     
        </div>
        </div>
    </div>
   </>
  )
}

export default Warning