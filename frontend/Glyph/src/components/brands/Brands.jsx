import React from 'react';
import "./Brands.scss";
import Apple from "../../images/apple.png";
import Nike from '../../images/nike.png';
import Amazon from "../../images/amazon.png";
import Sephora from "../../images/sephora.png";
import Starbucks from "../../images/starbucks.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Brands() {
  return (
   <>
   <div className="brands">
    <div className="conteiner">


    <div className="brands_wrapper">


        <div className="small-text">
        <span>
        Brand Collaborations: Elevate Your Gifting Game  </span>
        </div>

        <div className="big-text">
            <h3>
                 Explore Exclusive Gifts from Top Brands
            </h3>
        </div>
        <div className="brands-icons">
        <Swiper
    slidesPerView={2}
    navigation
    onInit={swiper => swiper.slideToLoop(0, 0)}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[Autoplay ]}
  >
     
    
            <SwiperSlide >
                    <img src={Apple} alt="Reload" />
            </SwiperSlide>
    
            <SwiperSlide >
                    <img src={Nike} alt="Reload" />
            </SwiperSlide>
      
            <SwiperSlide >
                    <img src={Amazon} alt="Reload" />
            </SwiperSlide>
            <SwiperSlide >
                    <img src={Sephora} alt="Reload" />
            </SwiperSlide>
            <SwiperSlide >
                    <img src={Starbucks} alt="Reload" />
            </SwiperSlide>
   
    </Swiper>
        </div>
    </div>
    </div>
    </div>
   </>
  )
}

export default Brands