import React, { useState, useRef, useEffect } from 'react';
import "./Slider.scss";
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import images for the cards
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";
import Card4 from "../../images/card4.png";
import Card5 from "../../images/card5.png";
import Card6 from "../../images/card6.png";
import 'swiper/css';
import { useSwiper } from 'swiper/react';
import CardV2 from '../card/CardV2';
import { useMediaQuery } from 'react-responsive';

function SliderV2({onBackClick, onNextClick, CardsSelected}) {
  const AllCards = [
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
        image: Card6,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
      {
        image: Card5,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
     
  ];
  console.log("CardsSelected", CardsSelected);
  const GamingCards = [
    {
      image: Card2,
      name: "PlayStation",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card1,
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
        image: Card6,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
      {
        image: Card5,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
     
  ];
  const BeautyCards = [
    {
      image: Card3,
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
        image: Card6,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
      {
        image: Card5,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
     
  ];
  const FashionCards = [
    {
      image: Card4,
      name: "PlayStation",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card1,
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
        image: Card6,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
      {
        image: Card5,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
      },
     
     
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 1080px)' }); // Визначаємо, чи є поточний пристрій мо
 

  const sliderRef = useRef(null);
  const swiperRef = useRef();
  const swiper = useSwiper();
  const renderCards = () => {
    if(CardsSelected === "all") {
        return AllCards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardV2
                image={card.image}
                name={card.name}
                priceMin={card.priceMin}
                priceMax={card.priceMax}
              />
            </SwiperSlide>
          ));
    }
    else if (CardsSelected === "gaming") {
        return GamingCards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardV2
                image={card.image}
                name={card.name}
                priceMin={card.priceMin}
                priceMax={card.priceMax}
              />
            </SwiperSlide>
          ));
    }
    else if (CardsSelected === "beauty") {
        return BeautyCards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardV2
                image={card.image}
                name={card.name}
                priceMin={card.priceMin}
                priceMax={card.priceMax}
              />
            </SwiperSlide>
          ));
    }
    else if (CardsSelected === "fashion") {
        return FashionCards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardV2
                image={card.image}
                name={card.name}
                priceMin={card.priceMin}
                priceMax={card.priceMax}
              />
            </SwiperSlide>
          ));
    }
   
  };
  if (isMobile) {
    return (
      <Swiper
        slidesPerView={"auto"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation
        onInit={(swiper) => swiper.slideToLoop(0, 0)}
      >
        <div className="cards_wrapper">{renderCards()}</div>
      </Swiper>
    );
  } else {
    if(CardsSelected === "all") {
        return (
            <div className="cards_wrapper pc">
              {AllCards.map((card, index) => (
                <CardV2
                  key={index}
                  image={card.image}
                  name={card.name}
                  priceMin={card.priceMin}
                  priceMax={card.priceMax}
                />
              ))}
            </div>
          );
    }

    else if (CardsSelected === "gaming") {
        return (
            <div className="cards_wrapper pc">
              {GamingCards.map((card, index) => (
                <CardV2
                  key={index}
                  image={card.image}
                  name={card.name}
                  priceMin={card.priceMin}
                  priceMax={card.priceMax}
                />
              ))}
            </div>
          );
    }
    else if (CardsSelected === "beauty") {
        return (
            <div className="cards_wrapper pc">
              {BeautyCards.map((card, index) => (
                <CardV2
                  key={index}
                  image={card.image}
                  name={card.name}
                  priceMin={card.priceMin}
                  priceMax={card.priceMax}
                />
              ))}
            </div>
          );
    }
    else if (CardsSelected === "fashion") {
        return (
            <div className="cards_wrapper pc">
              {FashionCards.map((card, index) => (
                <CardV2
                  key={index}
                  image={card.image}
                  name={card.name}
                  priceMin={card.priceMin}
                  priceMax={card.priceMax}
                />
              ))}
            </div>
          );
    }
   
  }
}


export default SliderV2;
