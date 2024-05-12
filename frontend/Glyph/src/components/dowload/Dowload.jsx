import React from 'react';
import "./Dowload.scss";
import Cencel from "../../images/cencel.png";
import Renew from "../../images/renew.png";
import { useMediaQuery } from 'react-responsive';

function Dowload({image, name,price,uptime, renewal}) {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  return (
   <>
   <div className="inner-dowload">

  
    <div className="dowload_wrapper">
        <div className="image-name">
            <img src={image} alt="Reload" />
            <span>{name}</span>
        </div>
        <div className="price-credits">
            <p>
                ${price}
            </p>
            <p>{price / 10} Credits</p>
        </div>
        <div className="uptime">
            <p>Up Time</p>
            <p>{uptime}</p>
        </div>
        <div className="renewal">
            {isMobile ? <>
                <div className="price-credits">
                    <p>
                        ${price}
                    </p>
                    <p>{price / 10} Credits</p>
                </div>
                <div className="uptime">
                    <p>Up Time</p>
                    <p>{uptime}</p>
                </div>
                <div className="renewall">
                    <p>Next Renewal</p>
                        <p>{renewal}</p>
                </div>
              
            </> : <> <p>Next Renewal</p>
            <p>{renewal}</p></>}
           
        </div>
    </div>
    <div className="buttons_download">
        <div className="cencel"><img src={Cencel} alt="" /><p>Cencel</p> </div>
        <div className="renew">
            <img src={Renew} alt="" />
            <p>Renew</p>
        </div>
    </div>
    </div>
   </>
  )
}

export default Dowload