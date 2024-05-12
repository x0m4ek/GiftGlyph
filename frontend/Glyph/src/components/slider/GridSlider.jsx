import React, { useState, useRef, useEffect } from 'react';
import "./Slider.scss";
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import images for the cards
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";
import Card4 from "../../images/card4.png";
import Monobank from "../../images/monobank.png"
import { Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import { useSwiper } from 'swiper/react';
function GridSlider({onBackClick, onNextClick}) {
  const cards = [
    {
      image: Card1,
      name: "PlayStation",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card2,
      name: "Spotify",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card3,
      name: "UberEats",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card4,
      name: "Starbucks",
      priceMin: 50,
      priceMax: 200,
    },
    {
        image: Card1,
        name: "PlayStation",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card2,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card3,
        name: "UberEats",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card4,
        name: "Starbucks",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card3,
        name: "UberEats",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card4,
        name: "Starbucks",
        priceMin: 50,
        priceMax: 200,
      },
      {
          image: Card1,
          name: "PlayStation",
          priceMin: 50,
          priceMax: 200,
        },
        {
          image: Card2,
          name: "Spotify",
          priceMin: 50,
          priceMax: 200,
        },
        {
          image: Card3,
          name: "UberEats",
          priceMin: 50,
          priceMax: 200,
        },
        {
          image: Card4,
          name: "Starbucks",
          priceMin: 50,
          priceMax: 200,
        },
  ];


 
  useEffect(() => {
    swiperRef.current.slidePrev()
  },[onBackClick])
  useEffect(() => {
    console.log("dsds")
    swiperRef.current.slideNext()
  },[onNextClick])
  const sliderRef = useRef(null);
  const swiperRef = useRef();
  const swiper = useSwiper();

  return (
    <>
    <Swiper
    // spaceBetween={24}
    grid={{rows:2, fill:"row"}}
    slidesPerView={4}
    onSlideChange={() => console.log("changed slide")}
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        0 : {
            slidesPerView:'auto',
            grid: {
                rows: 1,
                fill: 'row'
            }
        },
        670 : {
            slidesPerView:2,
            grid: {
                rows: 2,
                fill: 'row'
            }
        },
        850: {
            slidesPerView: 3,
            grid: {
                rows: 3,
                fill: 'row'
            }
        },
        1520 : {
            slidesPerView:4,
            grid: {
                rows: 2,
                fill: 'row'
            }
        },
        2000: {
            slidesPerView:5,
            grid: {
                rows: 2,
                fill: 'row'
            }
        }
      }}
      breakpointsBase='window'
    navigation
    modules={[Grid]}
    onInit={swiper => swiper.slideToLoop(0, 0)}
    className='grid_swiper'
  >
    <div className="cards_wrapper" ref={sliderRef} >
      {cards.map((card, index) => (
         <SwiperSlide  className='grid_slide'>
        <Card
          key={index}
          image={card.image}
          name={card.name}
          priceMin={card.priceMin}
          priceMax={card.priceMax}
        
        />
        </SwiperSlide>
      ))}
    </div>
     

   
    </Swiper>
   
 </>
  );
}

export default GridSlider;
