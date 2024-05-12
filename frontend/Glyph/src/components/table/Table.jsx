import React, { useEffect, useState } from 'react';
import "./Table.scss"
import { ProductCol } from '../productCart/ProductCart';
import Card1 from "../../images/card1.png";
import GroupedButtons from '../quantifyIncreser/GroupedButtons';
import TableBody from '../tableBody/TableBody';
import Moon from "../../images/moon.jpg";
import { useNavigate } from 'react-router-dom';


function Table({totalPriceHandler}) {
  const [totalPrice, setTotalPrice] = useState(0);
 
  const updateTotalPrice = (priceChange) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + priceChange);
  };
  const navigate = useNavigate()



  useEffect(()=> {
    totalPriceHandler(totalPrice)
  },[totalPrice])
  
  
  const productData = {
    image:Card1,
    name:"Playstaion",
    price:40,
    count:3,
    

  }
  



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
          <TableBody 
          image={productData.image}
          name={productData.name}
          priceProduct={productData.price}
          count={productData.count}
          updateTotalPrice={updateTotalPrice}
    
          />
           <TableBody 
          image={Moon}
          name={productData.name}
          priceProduct={productData.price}
          count={5}
          updateTotalPrice={updateTotalPrice}
          />
          {/* Додайте додаткові рядки, якщо потрібно */}
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