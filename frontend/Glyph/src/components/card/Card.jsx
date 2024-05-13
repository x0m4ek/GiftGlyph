import React from 'react';
import "./Card.scss";
import { useNavigate } from 'react-router-dom';

function Card({image, name, priceMin, priceMax, url}) {
    const handleClick = () => {
        window.location.href = `/product/${url}`;
      };
      const addToCart = () => {
        // Create a new item object
        const newItem = {
            image,
            name,
            priceMin,
            priceMax,
            url,
            count: 1,
            id:url
        };

        // Retrieve the current cart items from local storage
        const existingItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item already exists in the cart
        const existingItemIndex = existingItems.findIndex(item => item.id === url);

        if (existingItemIndex !== -1) {
            // If the item exists, increment its count
            existingItems[existingItemIndex].count++;
        } else {
            // If the item does not exist, add it to the cart
            existingItems.push(newItem);
        }

        // Store the updated items back in local storage
        localStorage.setItem('cart', JSON.stringify(existingItems));
    };
  return (
  <>
    <div className="card_wrapper" >
        <div className="img-card" onClick={handleClick}>
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
            <div className="wrapper_btn" onClick={()=> addToCart()}>
                <span>Add to card</span>
            </div>
        </div>
    </div>
  </>
  )
}

export default Card