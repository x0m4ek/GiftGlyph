import React from 'react';
import "./Details.scss";

function Details({total}) {
  return (
    <div className="details">
        <div className="top-s">
            <p>Checkout Details</p>
        </div>
        <div className="details_wrapper">
            <div className="item">
                <p>Cart Subtotal</p>
                <span>${total}</span>
            </div>
            <div className="item">
                <p>Shipping & Handling</p>
                <span>$0.00</span>
            </div>
            <div className="item">
                <p>Other Taxes</p>
                <span>$0.00</span>
            </div>
            
        </div>
            <div className="grand-total">
                <div className="total">
                    <span>Grand Total</span>
                    <span>${total}</span>
                </div>
            </div>
    </div>
  )
}

export default Details