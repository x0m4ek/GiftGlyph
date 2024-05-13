import React, { useState, useRef, useEffect } from 'react';
import "./Slider.scss";
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import images for the cards
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";
import Card4 from "../../images/card4.png";
import Monobank from "../../images/monobank.png";
import Microsoft from "../../images/microsoft.png";
import Nature from "../../images/nature.png";
import Moon from "../../images/moon.jpg";
import 'swiper/css';
import { useSwiper } from 'swiper/react';
import Back from "../../images/nextarrow.png";
import Next from "../../images/backarrow.png";
import {cards} from '../../products/Products';
function Slider() {
 
  const [backState,setBackState] = useState(false);
  const [nextState, setNextState] = useState(false);
  const handleClickBack = () => {
    setBackState(!backState)
  }
  

  const handleClickNext = () => {
    setNextState(!nextState)
  }

 
  useEffect(() => {
    swiperRef.current.slidePrev()
  },[backState])
  useEffect(() => {

    swiperRef.current.slideNext()
  },[nextState])
  const sliderRef = useRef(null);
  const swiperRef = useRef();
  const swiper = useSwiper();

  return (
    <>
    <div className="cards">

    
    <div className="navigation">
          <div className="text">
          <div className="small-text">
            <span>
            Feature Gift Cards: Elevate Your Gifting Experience
            </span>
        </div>
        <div className="big-text">
          <h3>Unlock Exceptional Gifts</h3>
        </div>
          </div>
          <div className="buttons">
              <div className="back-arrow-" onClick={() => handleClickBack()}>
                <img src={Back} alt="Reload" />
              </div>
              <div className="next-arrow-"  onClick={() => handleClickNext()}>
              <img src={Next} alt="Reload" />

              </div>
          </div>
          </div>
        </div>
    <Swiper
    // spaceBetween="auto"
    // grid={{rows:2}}
    slidesPerView={"auto"}
    onSlideChange={() => console.log("changed slide")}
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    navigation
    onInit={swiper => swiper.slideToLoop(0, 0)}
  >
    <div className="cards_wrapper" ref={sliderRef} >
      {cards.map((card, index) => (
         <SwiperSlide >
        <Card
          key={index}
          image={card.image}
          name={card.name}
          priceMin={card.priceMin}
          priceMax={card.priceMax}
          url={card.id}
        />
        </SwiperSlide>
      ))}
    </div>
     

   
    </Swiper>
   
 </>
  );
}

export default Slider;
