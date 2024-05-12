import React, { useState } from 'react';
import "./Category.scss";
import Slider from '../slider/Slider';
import SliderV2 from '../slider/SliderV2';
import Filter from '../categoriesfilter/Filter';

function Category() {
    const [selectedCards, setSelectedCards] = useState('all'); 
  return (
    <>
        <div className="category_wrappper">
            <div className="conteiner">
                <div className="top-titles">
                    <div className="small-text">
                        <span>Gift Categories: Find the Perfect Present for Every Occasion </span>
                    </div>
                    <div className="big-text">
                        <h3>Explore Our Diverse Range</h3>
                    </div>
                </div>
             <div className="inner_cat">
                <div className="categories">
                    <Filter setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>
                </div>
                <div className="cards small">
                    <SliderV2 CardsSelected={selectedCards} />
                </div>
             </div>
            
            </div>
        </div>
    </>
  )
}

export default Category