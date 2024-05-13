import React from 'react';
import "./GiftNow.scss";
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

function GiftNow() {
    const navigate = useNavigate();
  return (
    <>
    <div className="conteiner">

  
        <div className="wrapper-gift">
            <div className="inner-gift">

           
                <div className="small-text">
                    <span>The Ultimate Modern Gifting Solution</span>
                </div>
                <div className="big-text">
                    <h3>Effortless Gifting at Your Fingertips</h3>
                </div>
                <div className="text">
                    <p>Discover the simplicity of sending joy instantly with e-gift cards. Say goodbye to the hassle of traditional shopping and mailing – just a few clicks and your thoughtful present is on its way. Embrace the convenience of modern gifting today.</p>
                </div>
                <div className="gift-button">
                    <Button buttonText={"Gift now"} onClick={() => navigate("./shop")}/>
                </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default GiftNow