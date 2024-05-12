import React from 'react';
import "./Landing.scss";
import Search from '../search/Search';

function Landing() {
  return (
        <>
            <div className="wrapper_landing">
                <div className="conteiner">
                    <div className="inner_landing">
                    <div className="items_landing">

                    <div className="top-data">
                        
                    </div>
       
                    <div className="small_text">
                        <span>Discover Endless Possibilities in the World of E-Gifting</span>
                    </div>
                    <div className="title">
                        <h1>GiftVista: Your Gateway to Thoughtful Gifting</h1>
                    </div>
                    <Search />
                    </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Landing