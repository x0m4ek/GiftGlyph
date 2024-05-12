import React, { useState } from 'react';
import "./Cart.scss";
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Table from '../../components/table/Table';
import Details from '../../components/checkoutdetails/Details';


function Cart() {
  const [totalPrice, setTotalPrice] = useState();


  return (
    <>
    <Warning />
    <Navbar />

        <div className="cart_wrapper">
      
                <div className="tom">
                <div className="conteiner">
                    <div className="title"><h3>Your Cart</h3></div>
                    <div className="text-">
                        <span>View or edit your cart before checkout</span>
                    </div>
                </div>

               
            </div>
            <div className="conteiner">
              <div className="wrapper-cart">
              <Table  totalPriceHandler={(value) => setTotalPrice(value)}/>
                    <Details total={totalPrice}/>
              </div>
                 
                </div>
        </div>
    <Footer />
    </>
  )
}

export default Cart