import React from 'react'
import Warning from '../../components/warning/Warning'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./ContactUs.scss"
import Email from "../../images/email.png";
import Phone from "../../images/phone.png";
import Telegram from "../../images/telegram.png";
import { TextField } from '@mui/material'

function ContactUs() {
  return (
    <>
    <Warning />
    <Navbar />
    
        <div className="wrapper_contact">
            <div className="conteiner">

    
                <div className="title">
                    <h1>Stay Informed with Our Gift Card Updates</h1>
                </div>
                <div className="wrapper_">

           
                <div className="contacts">
                    <div className="email">
                        <img src={Email} alt="Reload" />
                        <p>example@gmail.com</p>
                    </div>
                    <div className="phone">
                        <img src={Phone} alt="Reload" />
                        <p>+0023 234 (9606)170</p>
                    </div>
                    <div className="telegram">
                        <img src={Telegram} alt="Reload" />
                        <p>Join Us on Telegram</p>
                    </div>
                </div>
                <div className="inputs">
                    <div className="first-">
                        <TextField  placeholder="Your name" variant='outlined' sx={{
                            background: "#fff",
                            borderRadius:4,
                            outline:"none",
                            border:"none",
                            
                        }}/>
                           <TextField  placeholder="Email Address" variant='outlined' sx={{
                            background: "#fff",
                            borderRadius:4,
                            outline:"none",
                            border:"none",
                            
                        }}/>
                    </div>
                    <div className="second-">
                    <TextField  placeholder="Phone Number" variant='outlined' sx={{
                            background: "#fff",
                            borderRadius:4,
                            outline:"none",
                            border:"none",
                            
                        }}/>
                           <TextField  placeholder="Service" variant='outlined' sx={{
                            background: "#fff",
                            borderRadius:4,
                            outline:"none",
                            border:"none",
                            
                        }}/>
                    </div>
                    <div className="third">
                    <TextField  placeholder="Message" variant='outlined' sx={{
                            background: "#fff",
                            borderRadius:4,
                            outline:"none",
                            border:"none",
                            height:"133px"
                            
                        }}/>
                    </div>
                </div>
                <div className="send-mes">
                    <span>Send Message</span>
                </div>
                </div>
                </div>
        </div>
    <Footer />
    </>
  )
}

export default ContactUs