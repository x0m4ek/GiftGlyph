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
import 'swiper/css';
import { useSwiper } from 'swiper/react';
import CardV2 from '../card/CardV2';
import { Autoplay} from 'swiper/modules';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
function CustomSlider() {
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


 
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  const sliderRef = useRef(null);
  const swiperRef = useRef();
  const swiper = useSwiper();

  if(isMobile) {
    return (
        <>
        <Swiper
        // spaceBetween="auto"
        // grid={{rows:2}}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("changed slide")}
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect={'cards'}
        cardsEffect={{
            perSlideOffset:62
        }}
          grabCursor={true}
          modules={[EffectCards,Autoplay]}
        navigation
        onInit={swiper => swiper.slideToLoop(0, 0)}
        className='custom_slider'
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        centeredSlides={true}
      >
        <div className="cards_wrapper" ref={sliderRef} >
          {cards.map((card, index) => (
             <SwiperSlide className='custom_slide' >
            <CardV2
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
  } else {
    return(
    <Swiper
    // spaceBetween="auto"
    // grid={{rows:2}}
    slidesPerView={6}
    onSlideChange={() => console.log("changed slide")}
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
   breakpoints={ {
    0: {
        slidesPerView:"auto"
    },
    1201: {
     
    }
   }}
    navigation
    onInit={swiper => swiper.slideToLoop(0, 0)}
    className='custom_slider'
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[Autoplay]}
    // centeredSlides={true}
  >
    <div className="cards_wrapper" ref={sliderRef} >
      {cards.map((card, index) => (
         <SwiperSlide className='custom_slide' >
        <CardV2
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
    )   
  }
  
}

export default CustomSlider;
