import React, { useEffect, useState } from 'react';
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import "./Main.scss"
import Slider from '../../components/slider/Slider';
import Back from "../../images/nextarrow.png";
import Next from "../../images/backarrow.png";
import Brands from '../../components/brands/Brands';
import Category from '../../components/category/Category';
import GiftNow from '../../components/giftnow/GiftNow';
import Steps from '../../components/steps/Steps';
import GridSlider from "../../components/slider/GridSlider";
import CustomizedCards from '../../components/customizedCards/CustomizedCards';
import Footer from '../../components/footer/Footer';

function Main() {
  const [backState,setBackState] = useState(false);
  const [nextState, setNextState] = useState(false);
  const handleClickBack = () => {
    setBackState(!backState)
  }
  

  const handleClickNext = () => {
    setNextState(!nextState)
  }
  return (
   <>
    <Warning />
    <Navbar />
    <Landing />
    <div className="cards">
      <div className="conteiner">
        
        
       
        <Slider  onBackClick={backState} onNextClick={nextState}/>
        </div>
    </div>
    <Brands />
    <Category />
    <GiftNow />
    <Steps />
    <div className="most-popular">
      <div className="conteiner">
        <div className="cards">

     
      <div className="navigation">
          <div className="text">
          <div className="small-text">
            <span>
            Discover Trending Gifts Loved by Many
            </span>
        </div>
        <div className="big-text">
          <h3>Most Popular Picks</h3>
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
        <GridSlider  onBackClick={backState} onNextClick={nextState}/>
      </div>

    </div>
    <CustomizedCards />
    <Footer />
   </>
  )
}

export default Main