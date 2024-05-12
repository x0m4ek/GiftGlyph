import React, { useEffect, useState } from 'react';
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card1 from "../../images/card1.png";
import "./Product.scss"
import ButtonProduct from '../../components/buttonProduct/ButtonProduct';
import Minus from "../../images/minus.png";
import Plus from "../../images/plus.png";
import { TextField } from '@mui/material';
import PlayStationAbout from "../../images/playstationWow.png";
import Slider from '../../components/slider/Slider';

function Product() {
  const [activeButton, setActiveButton] = useState({giftFriend:true});
  const [activeButtons, setActiveButtons] = useState({Custom:true});
  const [quantify, setQuiantify] = useState(1)
    const [cost, setCost] = useState(12);
  let productData = 
      {
          image:Card1,
          name:"Playstation",
          cost1:50,
          cost2:100,
          cost3:200,
          maxPrice:200,
          minPrice:50,
      }

  const handleButtonClick = (buttonId) => {

    setActiveButton({ [buttonId]: true });
  }
  const handleButtonClick1 = (buttonId) => {

    setActiveButtons({ [buttonId]: true });
  }
  return (
    <>
        <Warning />
        <Navbar />
        <div className="wrapper-product">
            <div className="conteiner">
                <div className="inner-product">
                  <div className="image-product"><img src={Card1} alt="Reload" /></div>
                  <div className="data-product">
                    <div className="name-product">
                      <span>{productData.name}</span>
                      <span className="price">$ {productData.minPrice} - $ {productData.maxPrice}</span>
                    </div>
                    <div className="buy-for">
                      {/* Передаємо функцію та стан кнопки як пропси */}
                      <ButtonProduct
                        text="Gift a Friend"
                        active={activeButton["giftFriend"]} // Стан кнопки "Gift a Friend"
                        onClick={() => handleButtonClick("giftFriend")} // Функція для зміни стану
                      />
                      <ButtonProduct
                        text="Buy for Self"
                        active={activeButton["buySelf"]} // Стан кнопки "Buy for Self"
                        onClick={() => handleButtonClick("buySelf")} // Функція для зміни стану
                      />
                    </div>
                    {activeButtons.Custom ? <>  <div className="gift-cost">
                        <span>Gift Cost</span>
                        <div className="custom-cost">
                            <div className="increment button" onClick={() =>setCost(cost + 1) }>
                                <img src={Plus} alt="Reload" />
                            </div>
                            <div className="cost"><span>${cost}</span></div>
                            <div className="decrease button" onClick={()=> setCost(cost -1)}>
                                <img src={Minus} alt="Reload" />
                            </div>
                        </div>

                    </div></> : <></> }
                  
                    <div className="buttons-cost">
                    <ButtonProduct
                        text="Custom"
                        active={activeButtons["Custom"]} // Стан кнопки "Buy for Self"
                        onClick={() => handleButtonClick1("Custom")} // Функція для зміни стану
                      />
                         <ButtonProduct
                        text="$50"
                        active={activeButtons["$50"]} // Стан кнопки "Buy for Self"
                        onClick={() => handleButtonClick1("$50")} // Функція для зміни стану
                      />
                            <ButtonProduct
                        text="$100"
                        active={activeButtons["$100"]} // Стан кнопки "Buy for Self"
                        onClick={() => handleButtonClick1("$100")} // Функція для зміни стану
                      />
                               <ButtonProduct
                        text="$200"
                        active={activeButtons["$200"]} // Стан кнопки "Buy for Self"
                        onClick={() => handleButtonClick1("$200")} // Функція для зміни стану
                      />
                    </div>
                    <div className="quantify">
                        <span>Quantity</span>

                        <div className="buttons-quan">
                        <TextField
                            id="outlined-number"
                            value={quantify}
                            onChange={(e) => setQuiantify(e.target.value)}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                                 <ButtonProduct
                        text="Continue"
                        active={true} // Стан кнопки "Buy for Self"
                        onClick={() => console.log("Shoud add to cart")} // Функція для зміни стану
                      />
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="about-product">
                    <div className="conteiner">
                        <div className="inner-about">

             

          
                            <div className="image-about">
                                <img src={PlayStationAbout} alt="Reload" />
                            </div>
                            <div className="text-about">
                                <div className="big-text"><h3>
                                Unlock Gaming Adventures: PlayStation Gift Card $50</h3></div>

                                <div className="main-text">
                                <p>Embark on thrilling gaming journeys with the PlayStation Gift Card worth $50. Dive into a world of endless entertainment, whether it's exploring immersive worlds, battling friends online, or discovering new adventures. Elevate your gaming experience with the freedom to choose from a vast selection of games, add-ons, and more.</p>
                            </div>
                            </div>
                           
                            </div>
                            
                            </div>
                </div>
                <div className="conteiner">
                <Slider />
                </div>
        
       
        </div>
        <Footer />
    </>
  )
}

export default Product;
