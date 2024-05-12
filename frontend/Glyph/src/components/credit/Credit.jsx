import React from 'react';
import "./Credit.scss";
import AddToCartIcon from '../addTocartIcon/AddToCartIcon';

function Credit({amount, price}) {
  return (
    <>
    <div className="credit_wrapper">
        <div className="credit-img">
            <p>
                {amount}<br />
                Credits
            </p>
        </div>
        <div className="price">
            <p>${price}  </p>
        </div>
        <AddToCartIcon />
    </div>
    </>
  )
}

export default Credit