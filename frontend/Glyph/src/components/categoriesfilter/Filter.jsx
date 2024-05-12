import React, { useState } from 'react';
import "./Filter.scss";
import All from "../../images/all.png";
import Gaming from "../../images/gaming.png";
import Beauty from "../../images/beauty.png";
import Fashion from '../../images/fashion.png';


function Filter({selectedCards, setSelectedCards}) {

  return (
    <>
        <div className="filter_wrapper">
            <div className={`all filter ${selectedCards === "all" ? "active" : ""}`} onClick={() => setSelectedCards("all")}>
                <div className="img-filter">
                    <img src={All} alt="Reload" />
                </div>
                <div className="text-fil">
                    <p>ALL</p>
                </div>
            </div>
            <div className={`gaming filter ${selectedCards === "gaming" ? "active" : ""}`} onClick={() => setSelectedCards("gaming")}>
                <div className="img-filter">
                    <img src={Gaming} alt="Reload" />
                </div>
                <div className="text-fil">
                    <p>GAMING</p>
                </div>
            </div>
            <div className={`beauty filter ${selectedCards === "beauty" ? "active" : " "} `}  onClick={() => setSelectedCards("beauty")}>
                <div className="img-filter">
                    <img src={Beauty} alt="Reload" />
                </div>
                <div className="text-fil">
                    <p>Beauty</p>
                </div>
            </div>
            <div className={`fashion filter ${selectedCards === "fashion" ? "active" : " "} `}  onClick={() => setSelectedCards("fashion")}>
                <div className="img-filter">
                    <img src={Fashion} alt="Reload" />
                </div>
                <div className="text-fil">
                    <p>Fashion</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filter