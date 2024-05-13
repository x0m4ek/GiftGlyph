import React from 'react';
import "./Card.scss";
import "./Card.scss"
import { useNavigate } from 'react-router-dom';

function CardV2({image, name, priceMin, priceMax,url}) {
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = `/product/${url}`;
  };

  return (
  <>
      <div className="card_wrapper" onClick={handleClick}>
        <div className="img-card">
            <img src={image} alt="Reload" />
        </div>
   
       
       
    </div>
  </>
  )
}

export default CardV2