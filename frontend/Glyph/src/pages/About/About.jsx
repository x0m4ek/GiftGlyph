import React from 'react';
import "./About.scss";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Guy from "../../images/guy.png";
import Gifts from "../../images/gifts.png";
import Slider from '../../components/slider/Slider';

function About() {
  return (
    <>
        <Navbar />
        <div className="about_wrapper"> 
        <div className="conteiner">
   
    
        <div className="main-">

    
                <div className="small-text">
                    <span>Crafting Connections, One Gift at a Time  </span>
                </div>
                <div className="bigger-text">
                    <h1>About Us</h1>
                </div>
                <div className="main-text"><p className='text-center'>At Gift Vista, we believe in the power of meaningful connections. Our journey began with a simple vision: to revolutionize the art of gifting, making it more convenient and heartfelt than ever before. With a passion for innovation and a commitment to spreading joy, we've curated a platform where every gift tells a story and every moment becomes a cherished memory. Join us on this journey of celebration and connection, where the perfect gift is just a click away.</p></div>
        </div>
        <div className="sec-1 sec">
            <div className="img">
                <img src={Guy} alt="Reload" />
            </div>
            <div className="text-sec">
                <div className="big-text">
                    <h3>Meet the Visionary Behind GiftVista</h3>
                </div>
                <div className="author">
                    <span>Aiden Matthews</span>
                </div>
                <div className="main-text"><p>With a blend of passion for gifting and entrepreneurial spirit, our founder embarked on a mission to redefine the art of thoughtful giving. Drawing from personal experiences and a vision for modernizing the gifting landscape, they established Gift Vista as a testament to the belief that every gift has the power to forge lasting connections and create unforgettable moments.</p></div>
            </div>
        </div>
        <div className="sec-2 sec">
        <div className="img">
                <img src={Gifts} alt="Reload" />
            </div>
            <div className="text-sec">
            <div className="big-text">
                    <h3>Empowering Connections: The Vision of Gift Vista</h3>
                </div>
                <div className="main-text">
                    <p>At Gift Vista, our goal is to foster meaningful connections through the art of gifting. We envision a world where every present exchanged is a symbol of love, appreciation, and thoughtfulness. Through innovative technology and curated selections, we strive to make every gift-giving experience a moment of joy and connection.</p>
                </div>
            </div>
          
        </div>
        <Slider />
        </div>    </div>
        <Footer />
    </>
  )
}

export default About