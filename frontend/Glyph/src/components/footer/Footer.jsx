import React from 'react';
import "./Footer.scss";
import Logo from "../../images/logo.png";

function Footer() {
  return (
    <>
        <div className="footer_wrapper">
            <div className="conteiner">

                <div className="inner_footer">

             
            <div className="left-side">
                <div className="logo">
                    <img src={Logo} alt="Reload" />
                </div>
                <div className="motto">
                    <p>Where Every Moment Becomes a Perfect Gift.</p>
                </div>
            </div>
            <div className="right-side">
                <div className="block">
                    <p>Company</p>
                    <li><a href="#">For Business</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Buy eGift Cards</a></li>
                    <li><a href="#">Buy Gaming</a></li>
                </div>
                <div className="block">
                    <p>Policy & Info</p>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Agent Contact</a></li>
                    <li><a href="">Services</a></li>
                </div>
                <div className="block">
                    <p>Our Social</p>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Youtube</a></li>
                </div>
            </div>
            </div>
            <div className="copyright">
                <div className="copyright_">
                    <span>© 2023 ShopSphere Crypto. All Rights Reserved.</span>
                </div>
                <div className="links">
                    <a href="/policy">Privacy Policy</a>
                    <a href="/terms">Tearms & Conditions</a>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer