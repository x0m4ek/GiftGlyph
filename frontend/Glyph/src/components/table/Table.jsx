import React, { useEffect, useState } from 'react';
import "./Table.scss"
import { ProductCol } from '../productCart/ProductCart';
import Card1 from "../../images/card1.png";
import GroupedButtons from '../quantifyIncreser/GroupedButtons';
import TableBody from '../tableBody/TableBody';
import Moon from "../../images/moon.jpg";
import { json, useNavigate } from 'react-router-dom';


function Table({totalPriceHandler}) {
  const [totalPrice, setTotalPrice] = useState(0);
 const [cart, setCart] = useState([]);
  const updateTotalPrice = (priceChange) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + priceChange);
  };
  const navigate = useNavigate()



  useEffect(()=> {
    totalPriceHandler(totalPrice)
  },[totalPrice])
  
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart"))
      setCart(storedCart);
    },[])
  



  return (
    <div className="table_wrapper">
      <table>
        <thead>
          <tr className='top-items-table'>
            <th colSpan={1.5} className='product_th'>Product</th>
            <th className='price_th'>Price</th>
            <th className='quan_th'>Quantity</th>
            <th className='total_th'>Total</th>
          </tr>
        </thead>
        <tbody>
        {cart ? (
          cart.map((item) => (
              <TableBody 
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  priceProduct={item.priceMin}
                  count={item.count}
                  updateTotalPrice={updateTotalPrice}
                  id={item.id}
              />
          ))
      ) : (
          <p className='text-center w-[100%] text-xl'>Cart is empty</p>
      )}
        </tbody>
      </table>
      <div className="buttons">
        <div className="go-back">
          <span>Go Back</span>
        </div>
        <div className="checkout" onClick={() => navigate("./checkout")}>
          <span>Checkout</span>
        </div>
      </div>
     
    </div>
  )
}

export default Table