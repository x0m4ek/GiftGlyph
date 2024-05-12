import React from 'react';
import "./Card.scss";
import "./Card.scss"

function CardV2({image, name, priceMin, priceMax}) {
  return (
  <>
    <div className="card_wrapper">
        <div className="img-card">
            <img src={image} alt="Reload" />
        </div>
   
       
       
    </div>
  </>
  )
}

export default CardV2