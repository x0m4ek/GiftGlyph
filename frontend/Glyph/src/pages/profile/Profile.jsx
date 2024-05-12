import React from 'react';
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import "./Profile.scss";
import Dowload from '../../components/dowload/Dowload';
import Card1 from "../../images/card1.png";
import UserDetails from '../../components/userDetails/UserDetails';


function Profile() {
    const user = {
        name: "Darnell",
        email:"Darnell.Roob@hotmail.com",
        plan: "Basic",
        expiry:"24 April, 2024",
        renewal:"On"

    }
    const DowloadData = {
        image:Card1,
        name:"Playstationn",
        price:40,
        upTime:120,
        renewal:"24 April, 2024"
    }
  return (
    <>
        <Warning />
        <Navbar />

            <div className="tom">
                <div className="conteiner">
                    <div className="title">
                        <h3>Welcome, {user.name}</h3>
                    </div>
                    <div className="text-">
                        <span>
                        Your Personal Dashboard
                        </span>
                    </div>
                </div>
            </div>

            <div className="wrapper-dashboard">
                <div className="conteiner">

                <div className="blockss">

           
                <div className="block-jeden">
                <div className="title">
                    <h3>User Account</h3>
                </div>
                <div className="active-dowloads">
                <div className="title-wrapper">

         
                    <div className="title-">
                        <h3>
                        Your Active Downloads
                        </h3>
                    </div>
                    </div>
                    <div className="downloads">
                        <Dowload 
                        image={DowloadData.image}
                        name={"Playstationn Playstationndff sfsdfsdfskj sdhfjkshfkjsdf jsdf"}
                        price={DowloadData.price}
                        uptime={DowloadData.upTime}
                        renewal={DowloadData.renewal}
                        />
                           <Dowload 
                        image={DowloadData.image}
                        name={DowloadData.name}
                        price={DowloadData.price}
                        uptime={DowloadData.upTime}
                        renewal={DowloadData.renewal}
                        />
                    </div>
                </div>
                </div>
                <div className="block-dva">
                    <UserDetails 
                        name={user.name}
                        email={user.email}
                        plan={user.plan}
                        expiry={user.expiry}
                        renewal={user.renewal}
                    />
                </div>
                
                </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default Profile