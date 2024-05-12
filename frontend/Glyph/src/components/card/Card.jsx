import React from 'react';
import "./Card.scss";
import { useNavigate } from 'react-router-dom';

function Card({image, name, priceMin, priceMax, url}) {
    const navigate = useNavigate();
  return (
  <>
    <div className="card_wrapper" onClick={() => navigate(`../product/${url}`)}>
        <div className="img-card">
            <img src={image} alt="Reload" />
        </div>
        <div className="name_card">
            <span>
                {name}
            </span>
        </div>
        <div className="price">
            <span>{priceMin}$-{priceMax}$</span>
        </div>
        <div className="add_to_cart">
            <div className="wrapper_btn">
                <span>Add to card</span>
            </div>
        </div>
    </div>
  </>
  )
}

export default Card