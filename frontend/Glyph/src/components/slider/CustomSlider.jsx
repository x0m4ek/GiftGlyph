import React, { useState, useRef, useEffect } from 'react';
import "./Slider.scss";
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSwiper } from 'swiper/react';
import CardV2 from '../card/CardV2';
import { Autoplay} from 'swiper/modules';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import {cards} from '../../products/Products';
function CustomSlider() {
  

 
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
              key={card.id}
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
          url={card.id}
        />
        </SwiperSlide>
      ))}
    </div>
     

   
    </Swiper>
    )   
  }
  
}

export default CustomSlider;
