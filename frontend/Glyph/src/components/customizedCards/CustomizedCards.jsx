import React from 'react';
import "./CustomizedCards.scss";
import CustomSlider from '../slider/CustomSlider';
import Choice from "../../images/choice.png";
import Delivery from "../../images/delivery.png";
import Accept from "../../images/accept.png";

function CustomizedCards() {
  return (
    <>
        <div className="wrapper_custom_cards">

                <div className="conteiner">
                    <div className="big-text">
                        <h3>Customized Card Made Easy</h3>
                    </div>
                </div>
         
                <CustomSlider />
                    <div className="conteiner">

               
                <div className="advs">
                    <div className="adv">
                        <div className="img-adv">
                            <img src={Choice} alt="Reload" />
                        </div>
                        <div className="text-adv">  
                            <span>CHOICE</span>
                            <p>+900 Option</p>
                        </div>
                      
                    </div>
                    <div className="adv">
                        <div className="img-adv">
                            <img src={Delivery} alt="Reload" />
                        </div>
                        <div className="text-adv">  
                            <span>DELIVERY </span>
                            <p>Digital Delivery </p>
                        </div>
                      
                    </div>
                    <div className="adv">
                        <div className="img-adv">
                            <img src={Accept} alt="Reload" />
                        </div>
                        <div className="text-adv">  
                            <span>ACCEPTANCE</span>
                            <p>Online store </p>
                        </div>
                      
                    </div>
                </div>
                </div>
        </div>
    </>
  )
}

export default CustomizedCards